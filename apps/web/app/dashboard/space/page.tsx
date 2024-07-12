"use client";

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { push } = useRouter();

  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-3">
          <span className="block text-gray-500">Hey, Luffy!</span>
          <span className="block">Create your first Space.</span>
        </h1>
        <p className="text-xl text-center">
          <span className="max-w-md">
            Craft Stunning Testimonials with Ease .
          </span>
        </p>
        <Button
          text="Create space"
          variant="danger"
          className="px-8 py-2 mt-8 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
          onClick={() => push(`/space`)}
        />
      </div>
    </div>
  );
};

export default page;
