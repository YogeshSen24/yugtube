import React from "react";
import { PostCard } from "../components";

function Discover() {
  return (
    <div className="w-full h-5/6">
      <input className="w-full p-2 my-2 bg-transparent border border-black " type="text" placeholder="search"/>
      <div class="grid grid-cols-3 grid-rows-auto h-full overflow-y-scroll w-full gap-1">
        <div class="bg-black">01</div>
        <div class="bg-black">02</div>
        <div class="bg-black">03</div>
        <div class="col-span-2 bg-black">04</div>
        <div class="bg-black">05</div>
        <div class="bg-black">06</div>
        <div class="col-span-2 bg-black">07</div>
      </div>
    </div>
  );
}

export default Discover;
