import React from "react";
import { LuPenSquare,LuSendHorizonal } from "react-icons/lu";
import { IoVideocamOutline, IoCameraOutline } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";

function CreatePostCard({profileImg}) {
  return (
    <div className="w-full font-xl  p-4 bg-[#163020] text-[#EEF0E5] rounded-xl">
      <div className="flex items-center mb-4 gap-2 text-[#B6C4B6]">
        <LuPenSquare />{" "}
        <label className="font-bold" htmlFor="">
          Create Post
        </label>
      </div>
      <div className="relative mb-3">
        <textarea
          placeholder="what's on your mind?"
          className="rounded-xl border ps-14 p-1 border-[#304D30] h-20 w-full bg-transparent"
        ></textarea>
        <img
          className=" absolute left-2 top-2  rounded-full size-8"
          src={profileImg}
          alt=""
        />
      </div>
      <div className="flex justify-between  text-sm font-bold ">
        <div className="text-red-600 flex gap-2 items-center">
          <IoVideocamOutline className="text-3xl" /> Live Video
        </div>
        <div className="text-green-400 flex gap-2 items-center">
          <FaPhotoVideo className="text-3xl" /> Photo / Video
        </div>
        <div className="text-yellow-500 flex gap-2 items-center" >
          <IoCameraOutline className="text-3xl" /> Quick Capture
        </div>
        <div >
        <LuSendHorizonal   className=" p-2  size-10 rounded-full hover:bg-[#304D30]" />
        </div>
      </div>
    </div>
  );
}

export default CreatePostCard;
