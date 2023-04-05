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
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-lg shadow-md text-center">
      <p className="text-1xl font-semibold text-white mb-2">
        Coquotesも含めた引用の総数
      </p>
      <p className="text-2xl font-bold text-white">{data.length} つ</p>
    </div>
  );
};

export default QuotesCount;
