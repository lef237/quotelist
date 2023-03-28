import React from "react";
import useSWR from "swr";
import fetcher from "../fetcher";

interface Quote {
  id: number;
  page_number: number;
  sentence: string;
}

const QuotesData = () => {
  const { data, error } = useSWR<Quote[]>(`/quotes.json`, fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      {JSON.stringify(data)}
      <br />
      <p>最初の配列のidとページ数と引用文</p>
      {data[0].id},{data[0].page_number},{data[0].sentence}
    </div>
  );
};

export default QuotesData;
