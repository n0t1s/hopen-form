import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-between px-20 items-center h-60 rounded-2xl bg-neutral-700">
      <div className="space-y-2 text-3xl text-white">
        <h1 className="font-extralight">
          Have a <span className="font-semibold">Question?</span>{" "}
        </h1>
        <h1 className="font-extralight">
          We&apos;re Here to <span className="font-semibold">Help</span>
        </h1>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="rounded-full px-6 bg-zinc-600"
          placeholder="Enter your email"
        />
        <button
          type="button"
          className="bg-white rounded-full px-9 py-5 uppercase font-medium"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
