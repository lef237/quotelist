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

// const onDelete = (id: number) => console.log('Deleted')

// 親コンポーネントの`onDelete`を使いたいときはこのように書く
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QuoteDelete = ({ id, onDelete }: Props) => {
  console.log(id);

  // DELETEを送って削除できるようにする
  // # DELETE /quotes/1 or /quotes/1.json を参考に、IDをURLの最後に付けて.jsonを付ける

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
      // onDelete(id);
      // 画面を更新している。状態を維持しながら画面を更新するための適切な方法ではない。ReactのuseStateフックを使用して状態を更新し、コンポーネントを再描画する方法が推奨されている。
      window.location.reload(); // 画面を更新する
      // console.logを表示させたいときは画面更新をしない
      console.log("Deleted");
    });
  };

  return (
    <>
      <div>この引用のIDは {id} です。</div>
      {/* Coquoteされている場合やユーザーの所有する引用でない場合は削除できない */}
      <button onClick={handleDelete}>削除</button>
    </>
  );
};

export default QuoteDelete;
