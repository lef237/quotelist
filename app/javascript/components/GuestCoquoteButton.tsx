import React from 'react';

type Props = {
  quoteId: number;
  numberCoquoted: number;
}

const GuestCoquoteButton = ({ quoteId, numberCoquoted }: Props) => {
  const handleClick = () => {
    alert('ログインしてください');
  }

  return (
    <>
      <button onClick={handleClick}>
        リツイートボタン
      </button>
      <p>{numberCoquoted}</p>
      <br />
      <a href={`/quotes/${quoteId}`}>{numberCoquoted}人に引用されています</a>
    </>
  );
}

export default GuestCoquoteButton;
