import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar-wrapper  bg-violet-700 text-violet-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className="nav-left">
          <span className="logo text-xl font-semibold">
            tech<span className="text-orange-500">Alpha</span>
          </span>
        </div>
        <div className="nav-right flex items-center gap-5">
          <NavLink className="nav-link" end to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
          <Link end to="/cart">
            <span className="cart-icon relative">
              <BsCart3 />
              <span className="cart-counter absolute -top-3 -right-3 text-xs h-5 w-5 rounded-full bg-orange-600 flex items-center justify-center font-medium">
                10
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
