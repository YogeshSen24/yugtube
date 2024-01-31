import React from "react";
import { RxCross1 } from "react-icons/rx";
import { GrCheckmark } from "react-icons/gr";

function FriendRequestStrip({profileImg , name , connections , id , handleDelete , handleAccpet}) {
  return (
    <div className="my-1 flex justify-between">
      <div className="flex gap-2 items-center justify-start">
        <div>
          <img
            className="rounded-full overflow-hidden aspect-square size-10"
            src={profileImg}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-semibold text-[#EEF0E5] text-sm mt-1.5">
           {name}
          </h2>
          <p className="mt-0.5 text-xs">{connections} mutule friends</p>
        </div>
      </div>
      <div className="text-xl font-thin text-white my-2">
        <button onClick={handleAccpet}  className="  p-2 m-1  rounded-full bg-blue-500">
          <GrCheckmark id={id} />
        </button>
        <button onClick={handleDelete} className=" p-2 m-1 rounded-full bg-red-500">
          <RxCross1 id={id} />
        </button>
      </div>
    </div>
  );
}

export default FriendRequestStrip;
