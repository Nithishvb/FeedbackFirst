"use client";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="w-[100%]">
        <div className="h-[100vh] w-full dark:bg-black bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="block w-[80%] h-[93%] p-6 bg-white border border-gray-200 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <h2 className="text-center mb-8 text-xl font-semibold">
              Create space
            </h2>
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const Forms = () => {
  return (
    <input
      type="text"
      className={`flex h-10 w-[200px] border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
      file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
      focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
      disabled:cursor-not-allowed disabled:opacity-50
      dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
      grou
      p-hover/input:shadow-none transition duration-400
      `}
      placeholder="Add text"
    />
  );
};
