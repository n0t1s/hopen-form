import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full flex items-center gap-20 py-8">
      <div className="flex flex-col gap-4 w-2/5">
        <div className="bg-neutral-200 space-y-4 px-10 py-12 rounded-2xl">
          <h2 className="text-3xl font-semibold">Primarily.</h2>
          <h3 className="w-4/6">
            1811 Silverside Rd, Wilmington, DE 19810, USA
          </h3>
          <div>
            <h3>
              US: +1 <span className="font-semibold">(001) 256 0034</span>
            </h3>
            <h3>
              UK: +0 <span className="font-semibold">(555) 514-1245</span>
            </h3>
          </div>
          <h3>email: support@primchat.com</h3>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="font-medium text-xl">Follow Us :</h2>
          <div className="flex gap-6">
            <SiInstagram className="text-neutral-300" size={18} />
            <SiFacebook className="text-indigo-600" size={18} />
            <SiTwitter className="text-neutral-300" size={18} />
            <SiLinkedin className="text-neutral-300" size={18} />
            <SiYoutube className="text-neutral-300" size={18} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 w-3/5">
        <div className="flex gap-20 pt-8">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">Support</h1>
            <h2 className="font-medium">About</h2>
            <h2 className="font-medium">Platform</h2>
            <h2 className="font-medium">Resources</h2>
            <h2 className="font-medium">Blog</h2>
            <h2 className="font-medium">Pricing</h2>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">Utility Pages</h1>
            <h2 className="font-medium">Style Guide</h2>
            <h2 className="font-medium">Changelog</h2>
            <h2 className="font-medium">Licenses</h2>
            <h2 className="font-medium">Protected</h2>
            <h2 className="font-medium">Not Found</h2>
          </div>
        </div>
        <div className="px-6 py-2 border-t flex justify-between">
          <h2>Copyright © Hopen</h2>
          <button type="button" className="rounded-full bg-zinc-800 p-2">
            <IoIosArrowUp size={20} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
