import React, { useState } from "react";

const CoquoteButton = ({ quoteId }) => {
  const [coquoted, setCoquoted] = useState(false); // ここの初期値はfalseになっているが、後で引数次第にする

  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");

  const handleLike = async () => {
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

  const handleUnlike = async () => {
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
  };

  return (
    <button onClick={coquoted ? handleUnlike : handleLike}>
      {coquoted ? "UnCoquote" : "Coquote"}
    </button>
  );
};

export default CoquoteButton;
