import { FiStar, FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/login");
  };

  const handleOnclikFavs = () => {
    navigate("/favourites");
  };

  const onClickLogo=()=>{
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#0d0d0dc9] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onClickLogo}>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              WeatherX
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition cursor-pointer"
              onClick={handleOnclikFavs}
            >
              <FiStar size={20} /> Favourites
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/40 transition cursor-pointer"
            >
              <FiLogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
