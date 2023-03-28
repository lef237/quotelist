import React from "react";
import useSWR from "swr";
import fetcher from "../fetcher";

interface Quote {
  id: number;
  page_number: number;
  sentence: string;
}

const QuotesCount = () => {
  const { data, error } = useSWR<Quote[]>(`/quotes.json`, fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  // このままの状態だと、kaminariのページネーションの１ページ目しか反映されない。
  // @quotes = Quote.all を別のコントローラーに書いて、それをfetchしてあげる必要がある（API用のコントローラー）
  return <div>引用の総数は {data.length} つです。</div>;
};

export default QuotesCount;
