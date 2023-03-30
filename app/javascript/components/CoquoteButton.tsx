import React, { useState } from "react";

type Props = {
  quoteId: number;
  isCoquoted: boolean;
};

const CoquoteButton = ({ quoteId, isCoquoted = false }: Props) => {
  // console.log(typeof quoteId)
  const [coquoted, setCoquoted] = useState(isCoquoted);

  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");

  const handleCoquote = async () => {
    const response = await fetch(`/quotes/${quoteId}/coquotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken || "",
      },
    });

    if (response.ok) {
      setCoquoted(true);
    }
  };

  // 子Quoteがある場合は削除できない
  const handleUnCoquote = async () => {
    const response = await fetch(`/quotes/${quoteId}/coquotes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken || "",
      },
    });

    if (response.ok) {
      setCoquoted(false);
    }

    if (!response.ok) {
      console.log(`子引用があるので削除できません。`)
      window.alert(`子引用があるので削除できません。`)
    }
  };

  return (
    <button onClick={coquoted ? handleUnCoquote : handleCoquote}>
      {coquoted ? "UnCoquote" : "Coquote"}
    </button>
  );
};

export default CoquoteButton;
