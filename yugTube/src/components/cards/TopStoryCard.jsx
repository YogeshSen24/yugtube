import React, { useState } from "react";
import { StoryStrip } from "../index";

function TopStoryCard() {
  const [stories , setStories] = useState([
    {
      id : 1,
      name : "Yogesh Sen",
      connections : 155,
      profileImg : "https://tse4.mm.bing.net/th?id=OIP.GsVEFowUNyAeODOWI9MlFwHaHb&pid=Api&P=0&h=220"
    },
    {
      id : 2,
      name : "Rahul Singh",
      connections : 47,
      profileImg : "https://tse3.mm.bing.net/th?id=OIP.nRTgb9vfJ91REuutvWu3bAHaGo&pid=Api&P=0&h=220"
    },
    {
      id : 3,
      name : "Manash Devangan",
      connections : 88,
      profileImg : "https://tse3.explicit.bing.net/th?id=OIP.hJyizxjoDYmhJvBrIGr_owHaHa&pid=Api&P=0&h=220"
    },
    {
      id : 4,
      name : "Aayu K",
      connections : 32,
      profileImg : "https://tse2.explicit.bing.net/th?id=OIP.bKiMAt2m8OxXrJ6eCW8eSQHaEK&pid=Api&P=0&h=220"
    },
    {
      id : 5,
      name : "Prajot K",
      connections : 122,
      profileImg : "https://tse2.mm.bing.net/th?id=OIP.XrIr4ZUBx9wy7KH-_zicGAHaIF&pid=Api&P=0&h=220"
    },

  ])
  const handleDelete=(e)=>{
    e.preventDefault()
    const newStories = stories.filter((item)=>e.target.id!=item.id)
    setStories(newStories)
  }
  return (
    <div className="rounded-3xl w-full h-full p-5 text-[#B6C4B6] bg-[#163020] overflow-y-scroll">
      <div className="flex justify-between items-center mb-4 border-b border-[#B6C4B6]">
        <label className="font-semibold" htmlFor="">
          Top Stories
        </label>
        <div className="text-[#EEF0E5] font-thin text-sm">see all</div>
      </div>
      <div className="overflow-y-scroll h-full">
        {
          stories.map((item)=>(
            <StoryStrip key={item.id} name={item.name} profileImg={item.profileImg} connections={item.connections} id={item.id} handleDelete={handleDelete} />
          ))
        }
        <div className="h-1/4"></div>
      </div>
    </div>
  );
}

export default TopStoryCard;
