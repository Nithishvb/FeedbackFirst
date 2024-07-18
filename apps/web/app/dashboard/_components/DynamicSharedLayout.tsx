"use client";

import Link from "next/link";
import React from "react";
import IconProject from "../../../../../packages/ui/src/icons/project";
import { useParams, useRouter } from "next/navigation";
import IconCardText from "../../../../../packages/ui/src/icons/cardtext-icon";
import IconCameraVideo from "../../../../../packages/ui/src/icons/video-icon";
import IconHeart from "../../../../../packages/ui/src/icons/favorite-icon";

const DynamicSharedLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams<{ spaceId: string }>();
  const router = useRouter();

  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        className="z-40 w-[320px] h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-150"
        aria-label="Sidebar"
      >
        <div className="w-full px-3 py-4">
          <Link href="/dashboard">
            <h2 className="w-auto text-2xl pl-[9px]">FeedbackFirst</h2>
          </Link>
        </div>
        <div className="px-3 py-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2">
            <li onClick={() => router.push('/dashboard/space')}>
              <a
                className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IconProject />
                <span className="ms-3 text-[15px]">Projects</span>
              </a>
            </li>
            {params.spaceId && (
              <>
                <li className="font-bold p-2 !mt-5">
                  <span className="flex-1 ms-1 mt-8 whitespace-nowrap text-[17px] text-gray-500 uppercase">
                    Inbox
                  </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <IconCardText />
                    <span className="flex-1 ms-3 whitespace-nowrap text-[15px]">
                      Text
                    </span>
                    {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <IconCameraVideo />
                    <span className="flex-1 ms-3 whitespace-nowrap text-[15px]">
                      Video
                    </span>
                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <IconHeart />
                    <span className="flex-1 ms-3 whitespace-nowrap text-[15px]">
                      Favorites
                    </span>
                    {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </aside>
      <div className="w-full h-full">
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default DynamicSharedLayout;
