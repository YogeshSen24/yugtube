import React,{useState} from "react";
import FriendRequestStrip from "../FriendRequestStrip";

function FriendRequestCard() {
  const [requests , setRequests] = useState([
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
    const newStories = requests.filter((item)=>e.target.id!=item.id)
    setRequests(newStories)
  }
  const handleAccpet = (e)=>{
    e.preventDefault()
    console.log(e.target.id , "added to friend");
    const newStories = requests.filter((item)=>e.target.id!=item.id)
    setRequests(newStories)

  }
  return (
    <div className="rounded-3xl w-100 h-3/6 p-5 text-[#B6C4B6] bg-[#163020] overflow-hidden">
      <div className="flex justify-between border-b mb-5 border-[#005B41]">
        <label className="text-m font-bold" htmlFocr="">
          Friend Requests
        </label>
        <div className="text-[#EEF0E5]">see all</div>
      </div>
<div className="h-full overflow-y-scroll">
  {requests.map((item)=><FriendRequestStrip key={item.id} name={item.name} profileImg={item.profileImg} connections={item.connections} id={item.id} handleDelete={handleDelete} handleAccpet={handleAccpet}/> )}
         
      <div className="h-1/4">

      </div>

</div>
    </div>
  );
}

export default FriendRequestCard;
