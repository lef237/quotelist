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
    // <div>
    //   <button onClick={coquoted ? handleUnCoquote : handleCoquote}>
    //     {coquoted ? "UnCoquote" : "Coquote"}
    //   </button>
    //   <p>{numCoquoted}</p>
    //   <a href={`/quotes/${quoteId}/coquote_users`}>
    //     {numCoquoted}人に引用されています
    //   </a>
    // </div>

    // <div>
    //   <button
    //     onClick={coquoted ? handleUnCoquote : handleCoquote}
    //     className={`btn ${coquoted ? "btn-error" : "btn-primary"}`}
    //   >
    //     {coquoted ? "UnCoquote" : "Coquote"}
    //   </button>
    //   <p>{numCoquoted}</p>
    //   <a
    //     href={`/quotes/${quoteId}/coquote_users`}
    //     className="text-blue-600 underline hover:text-blue-800"
    //   >
    //     {numCoquoted}人に引用されています
    //   </a>
    // </div>

    // <div className="flex items-center space-x-2">
    //   <button
    //     onClick={coquoted ? handleUnCoquote : handleCoquote}
    //     className={`btn ${coquoted ? "btn-error" : "btn-primary"}`}
    //   >
    //     {coquoted ? "UnCoquote" : "Coquote"}
    //   </button>
    //   <p className="mb-0 text-blue-600">{numCoquoted}</p>
    //   <br />
    //   <a href={`/quotes/${quoteId}/coquote_users`} className="text-blue-600 underline hover:text-blue-800">
    //     {numCoquoted}人に引用されています
    //   </a>
    // </div>

    <div>
      <div className="flex items-center space-x-2">
        <button
          onClick={coquoted ? handleUnCoquote : handleCoquote}
          className={`btn ${coquoted ? "btn-error" : "btn-primary"}`}
        >
          {coquoted ? "UnCoquote" : "Coquote"}
        </button>
        {/* <p className="mb-0 text-blue-600">{numCoquoted}</p> */}
        <p className="mb-0 text-blue-600 text-lg font-semibold">{numCoquoted}</p>
      </div>
      <div>
        <a href={`/quotes/${quoteId}/coquote_users`} className="text-blue-600 underline hover:text-blue-800">
          {numCoquoted}人に引用されています
        </a>
      </div>
    </div>
  );
};

export default CoquoteButton;
