"use client";

import { distributeFeedbacks } from "@/lib/helpers/distributeFeedbacks";
import useFetch from "@/lib/hooks/useFetch";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import LoadingDots from "../../../../../../../packages/ui/src/icons/loading-dots";

const page = () => {
  const params = useParams<{ spacename: string }>();
  const { data } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/feedbacks/text/${params.spacename}`
  );
  const result = distributeFeedbacks(data);

  return (
    <div className="bg-slate-900 min-h-screen">
      {data.length > 0 && result.length > 0 ? (
        <section id="testimonies" className="py-20">
          <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
            <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
              <div className="mb-12 space-y-5 md:mb-16 md:text-center">
                <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                  What people are saying.
                </h1>
                <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                  Here's what others have to say about us.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {result.map((row: any, index: number) => (
                <ul className="space-y-8" key={index}>
                  {row.map((col: any) => (
                    <li className="text-sm leading-6" key={col.id}>
                      <div className="relative group">
                        <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                        <a
                          className="cursor-pointer"
                        >
                          <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                            <div className="flex items-center space-x-4">
                              <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEWNw_Bo9DvCUkojUY6S3zYdxapqCxmIJhg&s"
                                className="w-12 h-12 bg-center bg-cover border rounded-full"
                                alt="Kanye West"
                                height={50}
                                width={50}
                              />
                              <div>
                                <h3 className="text-lg font-semibold text-white">
                                  {col.name}
                                </h3>
                                <p className="text-gray-500 text-md">
                                  Rapper &amp; Entrepreneur
                                </p>
                              </div>
                            </div>
                            <p className="leading-normal text-gray-300 text-md">
                              {col.feedback}
                            </p>
                          </div>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center items-center">
          <LoadingDots />
        </div>
      )}
    </div>
  );
};

export default page;
