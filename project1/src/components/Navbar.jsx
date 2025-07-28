import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="py-5 flex justify-center gap-x-20">
      <NavLink 
      className={(e) => (e.isActive ? "text-red-400" : "")}
      to="/"
      >
         Home
      </NavLink>

      <NavLink 
      className={(e) => (e.isActive ? "text-red-400" : "")}
      to="/recipes"
      >
         Recipes
      </NavLink>

      <NavLink 
      className={(e) => (e.isActive ? "text-red-400" : "")}
      to="/about"
      >
         About
      </NavLink>

      <NavLink 
      className={(e) => (e.isActive ? "text-red-400" : "")}
      to="/favroite"
      >
         Favroite
      </NavLink>
    </div>
  )
}

export default Navbar
