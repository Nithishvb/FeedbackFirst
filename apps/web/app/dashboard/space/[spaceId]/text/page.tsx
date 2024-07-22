"use client";

import React from "react";
import TextFeedbackCards from "../../../../../components/spaceCards/TextCards";
import Link from "next/link";
import useFetch from "../../../../../lib/hooks/useFetch";

const page = () => {
  const { data } = useFetch(`${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text`);

  return (
    <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {data?.map((val) => (
        <Link href={"#"} key={val.id}>
          <TextFeedbackCards {...val} />
        </Link>
      ))}
    </div>
  );
};

export default page;
