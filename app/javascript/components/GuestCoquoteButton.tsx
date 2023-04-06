import React from "react";

type Props = {
  quoteId: number;
  numberCoquoted: number;
};

const GuestCoquoteButton = ({ quoteId, numberCoquoted }: Props) => {
  const handleClick = () => {
    alert("ログインしてください");
  };

  console.log(numberCoquoted);

  return (
    <div className="flex justify-between items-center">
      <div>
        <a
          href={`/quotes/${quoteId}/coquote_users`}
          className="text-gray-600 underline hover:text-gray-800"
        >
          {numberCoquoted}人に引用されています
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleClick}
          className="btn bg-gray-500 text-white hover:bg-gray-600"
        >
          COQUOTE
        </button>
        <p className="mb-0 text-gray-600 text-lg font-semibold">
          {numberCoquoted}
        </p>
      </div>
    </div>
  );
};

export default GuestCoquoteButton;
