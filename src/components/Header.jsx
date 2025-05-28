import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full bg-white">
      <Link
        to="/"
        className="font-bold text-xl"
        style={{
          fontFamily: '"Rye", Helvetica, sans-serif',
          fontSize: "48px",
          fontWeight: 100,
          letterSpacing: "-9px",
        }}
      >
        OM
      </Link>
      <nav className="space-x-4">
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
