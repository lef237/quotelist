import React from "react";

type Props = {
  quoteId: number;
  numberCoquoted: number;
};

const GuestCoquoteButton = ({ quoteId, numberCoquoted }: Props) => {
  const handleClick = () => {
    alert("ログインしてください");
  };

  console.log(numberCoquoted)

  return (
    <div>
      <div className="flex items-center space-x-2">
        <button onClick={handleClick} className="btn btn-primary">
          COQUOTE
        </button>
        <p className="mb-0 text-blue-600 text-lg font-semibold">{numberCoquoted}</p>
      </div>
      <div>
        <a
          href={`/quotes/${quoteId}/coquote_users`}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {numberCoquoted}人に引用されています
        </a>
      </div>
    </div>
  );
};

export default GuestCoquoteButton;
