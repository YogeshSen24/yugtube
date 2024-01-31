import { NavBar, TopStoryCard } from "./components";
import { Outlet } from "react-router-dom";
import { FriendRequestCard, AccountCard } from "./components";
function App() {
  return (
    <div className="bg-[#304D30] h-screen overflow-hidden">
      <header>
        <NavBar />
      </header>
      <main className="flex h-full w-full overflow-scroll">
        <div className="w-1/4 flex-row items-start justify-between gap-5 p-3">
          <FriendRequestCard />
          <br />
          <AccountCard />
        </div>
        <div className="flex w-9/12">
          <div className=" w-full h-full m-1 flex justify-center overflow-scroll">
            <Outlet />
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
