import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/todolist/ABC"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
        >
          ABC To Do List
        </NavLink>
        <NavLink
          to="/todolist/DEF"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
        >
          DEF To Do List
        </NavLink>
      </nav>
    </div>
  );
};
