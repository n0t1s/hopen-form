import React from "react";

const Landing = () => {
  return (
    <div className="w-1/2 py-12 min-h-screen">
      <div className="flex flex-col gap-4">
        <div className="bg-amber-100 w-fit px-7 py-2 rounded-full">
          <h2 className="text-amber-500 font-semibold">Form Builder</h2>
        </div>
        <div className="space-y-8">
          <h1 className="font-extralight text-5xl leading-[64px]">
            Effortless Form Building: Create{" "}
            <span className="font-medium">Beautiful Forms</span> in{" "}
            <span className="font-medium">Minutes!</span>
          </h1>
          <h2 className="text-xl">
            Create stunning forms, gather valuable insights, and <br />
            watch your leads soar.
          </h2>
          <div className="flex justify-between">
            <button
              type="button"
              className="rounded-full px-9 py-5 uppercase font-medium bg-zinc-800 text-white"
            >
              Start your free trial now
            </button>
            <button
              type="button"
              className="rounded-full px-9 py-5 uppercase font-medium bg-zinc-100 text-black"
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
