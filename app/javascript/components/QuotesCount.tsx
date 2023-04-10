import React from "react";
import useSWR from "swr";
import fetcher from "../fetcher";

interface Quote {
  id: number;
  page_number: number;
  sentence: string;
}

const QuotesCount = () => {
  const { data, error } = useSWR<Quote[]>(`/total_quotes`, fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="text-center">
      <p className="text-1xl font-semibold text-gray-700 mb-2">
        共同引用も含めた引用総数
      </p>
      <p className="text-2xl font-bold text-gray-800">{data.length} 個</p>
    </div>
  );
};

export default QuotesCount;
