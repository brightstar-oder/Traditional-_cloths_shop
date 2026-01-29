import React from "react";
import img1 from "../../assets/photo_2026-01-28_06-07-29.jpg";
import { Link } from "react-router-dom";
export default function Card({ title, description, icon, isFeatured, children }) {
  return (
    <section class="mb-20 ml-0 min-h-screen bg-gradient-to-r from-slate-900 to-black text-white flex items-center">
  <div class="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div class="space-y-6 animate-fade-in">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        የተለያዩ ባህላዊ አልባሳት በገበያችን ይምረጡ
      </h1>
      <p class="text-gray-300 text-lg">
        ሁሉም አይነት ባህላዊ ልብሶች እናቀርባለን
      </p>
      <Link to="/Service">
      <button class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl">
        ይጎበኙን
      </button></Link>
    </div>
    <div class="flex justify-center animate-float">
      <img
        src={img1}
        alt="Developer Illustration"
        class="w-[320px] md:w-[420px] drop-shadow-2xl"
      />
    </div>

  </div>
</section>
  );
}
