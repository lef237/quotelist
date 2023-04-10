import React from "react";

type Props = {
  quoteId: number;
  numberCoquoted: number;
};

const GuestCoquoteButton = ({ quoteId, numberCoquoted }: Props) => {
  const handleClick = () => {
    alert("引用ボタンを押すには、ログインしてください");
  };

  console.log(numberCoquoted);

  return (
    <div className="flex justify-between items-center">
      <div>
        <a
          href={`/quotes/${quoteId}/coquote_users`}
          className="text-gray-600 underline hover:text-gray-800"
        >
          {numberCoquoted}人が引用しています
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleClick}
          className="btn bg-gray-300 text-black hover:bg-gray-600"
        >
          共同引用する
        </button>
        <p className="mb-0 text-gray-600 text-lg font-semibold">
          {numberCoquoted}
        </p>
      </div>
    </div>
  );
};

export default GuestCoquoteButton;
