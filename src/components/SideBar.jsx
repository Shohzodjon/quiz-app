import logo from "../images/logo.svg";
import "../styles/sidebar.css";
import { Link, Outlet } from "react-router-dom";
const SideBar = () => {
  return (
    <section className="sidebar__section">
      <div className="sidebar__flex">
        <div className="sidebar__top">
          <div className="sidebar__logo">
            <Link to="/">
              <img src={logo} alt="sidebar logo" />
            </Link>
          </div>
          <ul className="menu__list__wrapp">
            <li>
              <Link to="/" className="menu__list">
                <ion-icon name="home-outline"></ion-icon>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/test" className="menu__list">
                <ion-icon name="chatbubble-outline"></ion-icon>
                <span>Test CRUD</span>
              </Link>
            </li>
            <li>
              <Link to="/comments" className="menu__list">
                <ion-icon name="people-outline"></ion-icon>
                <span>Users</span>
              </Link>
            </li>
          </ul>
        </div>
        {/*  end of sidebar top */}
        <ul className="bottom__menu">
          <li>
            <Link to="/account" className="bottom__menu__list">
              <ion-icon name="person-outline"></ion-icon>
              <span>Account</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="bottom__menu__list">
              <ion-icon name="exit-outline"></ion-icon>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};
export default SideBar;
