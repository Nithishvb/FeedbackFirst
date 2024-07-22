"use client";

import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NewSpaceProps } from "../../../lib/types";
import Spaces from "../../../components/pages/Space";

const page = () => {
  const { push } = useRouter();
  const [spaces, setSpaces] = useState<NewSpaceProps[]>([]);

  useEffect(() => {
    fetchSpaces();
  }, []);

  const fetchSpaces = async () =>{
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`);
    const response = await data.json();
    setSpaces(response);
  }

  const handleNavigate = () => {
    push(`/space`);
  };

  return (
    <div className="flex justify-center items-center">
      {spaces.length === 0 ? (
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
            onClick={handleNavigate}
          />
        </div>
      ) : (
        <Spaces />
      )}
    </div>
  );
};

export default page;
