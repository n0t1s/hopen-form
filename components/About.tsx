import React from "react";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div className="w-1/2 py-12 min-h-screen">
      <div className="flex flex-col gap-4">
        <div className="bg-amber-100 w-fit px-7 py-2 rounded-full">
          <h2 className="text-amber-500 font-semibold">
            About Our Form Builder
          </h2>
        </div>
        <div className="space-y-8">
          <h1 className="font-light text-3xl">
            Easy <span className="font-semibold">Drag-and-Drop</span> Builder
          </h1>
          <h2 className="">
            Tired of clunky, confusing forms that tank your response rates? Meet
            Form Builder, the intuitive platform that empowers you to create
            engaging surveys, applications, and more.
          </h2>
          <h2 className="">
            With drag-and-drop simplicity, powerful features, and stunning
            templates, you&apos;ll collect high-quality data and impress your
            audience, all without coding.
          </h2>
          <div className="flex flex-col items-start gap-5">
            <button
              type="button"
              className="rounded-full py-2.5 px-4 uppercase flex items-center gap-3 bg-gradient-to-r from-amber-400/30 via-amber-100/30 to-white"
            >
              <div className="p-1 rounded-full bg-amber-500 text-white">
                <FaCheck />
              </div>
              <h3 className="text-amber-500 font-semibold">drag-and-drop</h3>
            </button>
            <button
              type="button"
              className="rounded-full py-2.5 px-4 uppercase flex items-center gap-3 bg-gradient-to-r from-indigo-400/30 via-indigo-100/30 to-white"
            >
              <div className="p-1 rounded-full bg-indigo-500 text-white">
                <FaCheck />
              </div>
              <h3 className="text-indigo-500 font-semibold">
                powerful features
              </h3>
            </button>
            <button
              type="button"
              className="rounded-full py-2.5 px-4 uppercase flex items-center gap-3 bg-gradient-to-r from-green-400/30 via-green-100/30 to-white"
            >
              <div className="p-1 rounded-full bg-green-500 text-white">
                <FaCheck />
              </div>
              <h3 className="text-green-500 font-semibold">
                stunning templates
              </h3>
            </button>
          </div>
          <button
            type="button"
            className="rounded-full px-9 py-5 uppercase font-medium bg-zinc-800 text-white"
          >
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
