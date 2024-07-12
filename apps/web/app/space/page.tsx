"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
  Button,
  Input,
  Card,
} from "@repo/ui";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="w-[100%]">
        <div className="h-[100vh] w-full dark:bg-black bg-[#A2DEEE] relative flex items-center justify-center">
          <div className="absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="block w-[40%] h-[93%] p-6 bg-white border border-gray-200 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="mb-7">
              <h2 className="mb-1 text-3xl font-bold font-geistMono">
                Create space
              </h2>
              <p className="text-gray-500">Fill out the form to get started.</p>
            </div>
            <form autoComplete="off">
              <div className="my-5">
                <label className="mb-4 p-[2px]"> 
                  Space Name <span className="text-red-400">*</span>
                </label>
                <Input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  placeholder="Enter your space name"
                  required
                />
              </div>
              <div className="my-5">
                <label>
                  Header Title <span className="text-red-400">*</span>
                </label>
                <Input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your space name"
                  required
                />
              </div>
              <div className="my-5">
                <label>
                  Header Description <span className="text-red-400">*</span>
                </label>
                <Input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter your space name"
                  required
                />
              </div>
              <div>
                <label>Feedback type</label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

