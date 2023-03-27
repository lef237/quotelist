import React from "react";

type Props = {
  id: number;
  user_id: number;
  book_id: number;
  sentence: string;
  page_number: number | null;
  source_quote_id: number | null;
};


const QuoteDelete = ( props : Props ) => {
  console.log(props)

  return (
    <>
      <div>この引用のIDは {props.user_id} です。</div>
    </>
  );

};

export default QuoteDelete;
