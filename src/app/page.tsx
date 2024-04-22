import Explore from "./components/Explore";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Trending from "./components/Trending";


export default function Home() {
  return (
    <div>
      <div className="sticky  top-0 overflow-hidden z-10 bg-white rounded-lg">
        <Navbar />
      </div>
      
      <Explore />
      <Profile />
      <div className="flex ">
      <Interests />
      <Trending />
      </div>
      
      
    </div>
  );
}
