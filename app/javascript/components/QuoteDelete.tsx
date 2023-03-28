import React from "react";

type Props = {
  id: number;
  user_id: number;
  book_id: number;
  sentence: string;
  page_number: number | null;
  source_quote_id: number | null;
  onDelete: (id: number) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QuoteDelete = ({ id, onDelete }: Props) => {
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");

  const handleDelete = () => {
    fetch(`/quotes/${id}`, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": csrfToken || "",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(() => {
      window.location.reload();
      // onDelete(id);
    });
  };

  return (
    <>
      <div className="bg-green-500">この引用のIDは {id} です。</div>
      <button onClick={handleDelete}>削除</button>
    </>
  );
};

export default QuoteDelete;
