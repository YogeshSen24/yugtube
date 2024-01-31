import React from 'react'
import { RxCross1 } from 'react-icons/rx';

function StoryStrip({profileImg , name , connections , id , handleDelete }) {
  return (

    <div className="flex items-center justify-between pb-2 gap-3">
          <div className="flex items-center  pb-2 gap-3">
            <div>
              <img
                className="rounded-full border-2 border-blue-600 overflow-hidden aspect-square w-10"
                src={profileImg}
                alt=""
              />
            </div>
            <div>
              <h2 className="font-semibold text-sm text-[#EEF0E5]">{name}</h2>
              <p className="mt-0.5 text-xs">{connections} mutule friends</p>
            </div>
          </div>
          <div>
            <button onClick={handleDelete}className="bg-red-500 text-xl rounded-full p-2 text-white">
              <RxCross1  id={id} />
            </button>
          </div>
        </div>
  )
}

export default StoryStrip
