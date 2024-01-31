import React from "react";
import { BsThreeDots } from "react-icons/bs";

function PostCard({ profileImg, name, time, content, postImgs }) {
  return (
    <div className="my-2 rounded-xl p-4 text-[#EEF0E5] bg-[#163020]">
      <div>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center  font-sm gap-2">
            <img className="size-14 rounded-full" src={profileImg} alt="" />
            <div>
              <h2 className="font-bold">{name}</h2>
              <p className=" text-[#B6C4B6]">{time} ago</p>
            </div>
          </div>
          <BsThreeDots className="bg-[#232D3F] p-1 size-10 rounded-full hover:bg-[#304D30]" />
        </div>
        <div className="text-[#B6C4B6] pe-7">
          <p>{content}</p>
          <div className="flex gap-2 my-3">
            {
              <img
                key={postImgs[0]}
                className="w-1/3 rounded-md"
                src={postImgs[0]}
                alt=""
              />
            }
            {
              <img
                key={postImgs[1]}
                className="w-1/3 rounded-md"
                src={postImgs[1]}
                alt=""
              />
            }
            {
              <div className="relative">
                <img
                  key={postImgs[2]}
                  className="w-full brightness-50 rounded-md "
                  src={postImgs[2]}
                  alt=""
                />
                <h1 className="text-white absolute inset-2/4 text-xl">
                  {`+${postImgs.length - 3}`}
                </h1>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
