import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1C1E24] text-white py-5 px-10 flex items-center justify-around">
      <div className="text-2xl font-bold flex">
        <span className="text-white opacity-80">{"{"}</span>Finsweet
      </div>

      <ul className="flex space-x-8 text-sm font-medium text-gray-400">
        <Link to="/">Company</Link>
        <Link to="/Career">Career</Link>
        <Link to="/blog">Blog</Link>
      </ul>

      <button className="text-[#FFD3AF] flex items-center gap-2 hover:brightness-110">
        Clone project <span>→</span>
      </button>
    </nav>
  );
};

export default Navbar;