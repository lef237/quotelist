import React, { useState } from "react";

type Props = {
  quoteId: number;
  isCoquoted: boolean;
  numberCoquoted: number;
};

const CoquoteButton = ({ quoteId, isCoquoted = false, numberCoquoted }: Props) => {
  // console.log(typeof quoteId)
  const [coquoted, setCoquoted] = useState(isCoquoted);
  const [numCoquoted, setNumCoquoted] = useState(numberCoquoted);

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
      setNumCoquoted(numCoquoted + 1);
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
      setNumCoquoted(numCoquoted - 1);
    }

    if (!response.ok) {
      console.log(`子引用があるので削除できません。`)
      window.alert(`子引用があるので削除できません。`)
    }
  };

  return (
    <div>
      <button onClick={coquoted ? handleUnCoquote : handleCoquote}>
        {coquoted ? "UnCoquote" : "Coquote"}
      </button>
      <br/>
      {/* 後で引用者一覧ページに変更する */}
      <a href={`/quotes/${quoteId}`}>{numCoquoted}人に引用されています</a>
    </div>
  );
};

export default CoquoteButton;