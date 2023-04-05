import React, { useState } from "react";

type Props = {
  quoteId: number;
  isCoquoted: boolean;
  numberCoquoted: number;
};

const CoquoteButton = ({
  quoteId,
  isCoquoted = false,
  numberCoquoted,
}: Props) => {
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
      console.log(`子引用があるので削除できません。`);
      window.alert(`子引用があるので削除できません。`);
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <button
          onClick={coquoted ? handleUnCoquote : handleCoquote}
          className={`btn ${
            coquoted ? "bg-gray-500 text-white" : "bg-gray-300 text-black"
          } transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 hover:text-white shadow-md`}
        >
          {coquoted ? "UnCoquote" : "Coquote"}
        </button>
        <p className="mb-0 text-gray-800 text-lg font-semibold shadow-sm">
          {numCoquoted}
        </p>
      </div>
      <div>
        <a
          href={`/quotes/${quoteId}/coquote_users`}
          className="text-gray-700 underline hover:text-gray-900 transition duration-300 ease-in-out"
        >
          {numCoquoted}人に引用されています
        </a>
      </div>
    </div>
  );
};

export default CoquoteButton;
