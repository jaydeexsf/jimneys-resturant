import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="b-black text-blue-500">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;