import React, { useState } from "react";
import { CreatePostCard, PostCard, TopStoryCard } from "../components";
function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Yogesh Sen",
      profileImg:
        "https://tse4.mm.bing.net/th?id=OIP.2U3l-8bAR4augk7JwCxW5QHaEK&pid=Api&P=0&h=220",
      time: "3 hours",
      content:
        "In today's hyperconnected world, data is the lifeblood of businesses and individuals alike. However, this valuable information also makes us a prime target for cybercriminals. Data breaches, the unauthorized access and exposure of sensitive information, have become increasingly common, causing significant financial losses, reputational damage, and even identity theft. 🚨",
      postImgs: [
        "https://tse3.mm.bing.net/th?id=OIP.UoeumD72MNqJ7f7yeWOsugHaEO&pid=Api&P=0&h=220",
        "https://tse4.mm.bing.net/th?id=OIP.te5-Jfhddh7mhV1AjTz-7AHaEo&pid=Api&P=0&h=220",
        "https://tse3.mm.bing.net/th?id=OIP.DUZ_82v0LVDvB5becqRKcAHaHZ&pid=Api&P=0&h=220",
        "https://tse1.mm.bing.net/th?id=OIP.3ZMgKeiqWM44kKm2anbUEwHaNK&pid=Api&P=0&h=220",
      ],
    },
  ]);
  return (
    <div className="flex w-full">
      <div className="h-5/6 p-4 w-9/12 overflow-y-scroll ">
        <CreatePostCard profileImg="https://tse4.mm.bing.net/th?id=OIP.GsVEFowUNyAeODOWI9MlFwHaHb&pid=Api&P=0&h=220" />
        {posts.map((items) => (
          <PostCard
            key={items.id}
            name={items.name}
            content={items.content}
            time={items.time}
            profileImg={items.profileImg}
            postImgs = {items.postImgs}
          />
        ))}
      </div>
      <div className="w-1/4 h-3/6  p-2">
        <TopStoryCard />
      </div>
    </div>
  );
}

export default Home;
