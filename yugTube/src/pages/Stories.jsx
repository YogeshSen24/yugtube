import React from "react";
import { StoryCard } from "../components";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";

function Stories() {
  return (
    <div className="m-2 w-full p-4 h-4/5 rounded-xl overflow-scroll font-semibold text-3xl text-[#B6C4B6] bg-[#163020]">
      <div className="flex justify-between mb-5 items-center">
        <h2>Stories</h2>
        <div className="relative flex items-center gap-2  my-4 text-3xl">
          <input
            type="text"
            className="bg-[#B6C4B6] p-3 ps-10 text-sm font-thin rounded border-transparent text-[#EEF0E5] focus:border-transparent  "
          />
          <CiSearch className="absolute top-2 left-2 text-[#163020]" />
          <button>
            <FiFilter className=" rounded size-11 p-2 text-[#163020] bg-[#B6C4B6]" />
          </button>
        </div>
      </div>
      <div className="flex justifuy-between flex-wrap  gap-5 ">
        <StoryCard
          profileImg="https://tse3.mm.bing.net/th?id=OIP.IrZnAG_TgheSWceuEWZXywHaEo&pid=Api&P=0&h=220"
          storyImg="https://tse2.explicit.bing.net/th?id=OIP.YvQXWcy3MOtKOjz3N-EWVwHaNW&pid=Api&P=0&h=220"
        />
        <StoryCard
          profileImg="https://tse2.mm.bing.net/th?id=OIP.I-SGG5cBigTILwx2TuZinAHaEo&pid=Api&P=0&h=220"
          storyImg="https://tse1.mm.bing.net/th?id=OIP.BuotUnZMt-FRCjXLZs83qAHaKn&pid=Api&P=0&h=220"
        />
          <StoryCard
            profileImg="https://tse3.mm.bing.net/th?id=OIP.Nh6_W_Eh8vhL0Mv0-JCvNAHaEJ&pid=Api&P=0&h=220"
            storyImg="https://tse3.mm.bing.net/th?id=OIP.GgByRKYA1ykimNOkTOMuAwHaKd&pid=Api&P=0&h=220"
          />
        <StoryCard
          profileImg="https://tse2.mm.bing.net/th?id=OIP.H1a6Tc9FIQrP7ktPbRCtDwHaFj&pid=Api&P=0&h=220"
          storyImg="https://tse2.mm.bing.net/th?id=OIP.6ktUwjosiPDCEWKoCGGENQHaLv&pid=Api&P=0&h=220"
        />
        <StoryCard
          profileImg="https://tse2.mm.bing.net/th?id=OIP.mCmc_jVBGb5y_Olj40BEBgHaEK&pid=Api&P=0&h=220"
          storyImg="https://tse3.mm.bing.net/th?id=OIP.i77Eu5gAgC0G-v75hMkjSgHaFS&pid=Api&P=0&h=220"
        />
        <StoryCard
          profileImg="https://tse2.mm.bing.net/th?id=OIP.agog8CdSf4oCkfUkvvkLNgEZDe&pid=Api&P=0&h=220"
          storyImg="https://tse1.mm.bing.net/th?id=OIP.xdQ4yH5dFfMVsCFJ4Bb7-AHaEo&pid=Api&P=0&h=220"
        />
      </div>
    </div>
  );
}

export default Stories;
