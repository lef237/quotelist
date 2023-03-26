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

  return <div>配列の総数は {data.length} つです。</div>;
};

export default QuotesCount;
