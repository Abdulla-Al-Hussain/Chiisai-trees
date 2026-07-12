import { NavLink } from "react-router-dom";
import  useAuth  from "../../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const navLinks = (
    <>
      <li>
        <NavLink to="/"  className="rounded-xl text-white hover:bg-white/20">Home</NavLink>
      </li>

      <li>
        <NavLink to="/plants" className="rounded-xl text-white hover:bg-white/20">Bonsai</NavLink>
      </li>

      <li>
        <NavLink to="/login" className="rounded-xl text-white hover:bg-white/20">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl mt-4">
      {/* Left */}
      <div className="navbar-start">

        {/* Mobile Menu */}

        <div className="dropdown ">

          <div   tabIndex={0} role="button"className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white cursor-pointer hover:bg-white/20 transition">

            ☰

          </div>

          <ul
             tabIndex={0} className=" menu menu-sm dropdown-content mt-3 w-56  rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl  shadow-2xl  p-3  z-100 "
          >
            {navLinks}
          </ul>

        </div>

        <NavLink to="/"className="flex items-center gap-3">
         <img src="/logo.png" alt="Chisai Trees Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold text-white">Chiisai Trees</span>
</NavLink>

      </div>

      {/* Desktop */}

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1">

          {navLinks}

        </ul>

      </div>

      {/* Right */}

<div className="navbar-end">

  {user ? (
    <button
      onClick={logout}
      className="
        px-5
        py-3
        rounded-xl
        bg-red-600/80
        hover:bg-red-500
        backdrop-blur-xl
        border border-white/20
        text-white
        transition-all
        duration-300
      "
    >
      Logout
    </button>
  ) : (
    <NavLink
      to="/login"
      className="
        px-5
        py-3
        rounded-xl
        bg-green-600/80
        hover:bg-green-500
        backdrop-blur-xl
        border border-white/20
        text-white
        transition-all
        duration-300
      "
    >
      Admin
    </NavLink>
  )}

</div>

    </div>
  );
}

export default Navbar;