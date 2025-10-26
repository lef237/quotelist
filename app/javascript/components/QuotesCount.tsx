import React from "react";
import useSWR from "swr";
import fetcher from "../fetcher";

interface QuotesCountResponse {
  count: number;
}

const QuotesCount = () => {
  const { data, error } = useSWR<QuotesCountResponse>(`/total_quotes`, fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="text-center">
      <p className="text-1xl font-semibold text-gray-700 mb-2">
        現在の引用総数
      </p>
      <p className="text-2xl font-bold text-gray-800">{data.count} 個</p>
    </div>
  );
};

export default QuotesCount;
