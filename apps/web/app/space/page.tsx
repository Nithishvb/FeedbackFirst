"use client";

import { Boxes } from "@repo/ui";
import NewSpace from "../../components/forms/NewSpace";

const page = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex justify-center items-center w-full">
        <div className="w-[100%]">
          <div className="w-full dark:bg-black relative flex items-center justify-center">
            <div className="w-[90%] lg:w-[40%] my-8 p-6 bg-white border border-gray-200 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="mb-7">
                <h2 className="mb-1 text-3xl font-bold font-geistMono">
                  Create space
                </h2>
                <p className="text-gray-500">
                  Fill out the form to get started.
                </p>
              </div>
              <NewSpace />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
