import UserCard from "../components/UserCard";
import "../styles/user-list.css";
import { Link } from "react-router-dom";
const UserLists = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="user__list__section">
      <header className="user__list__header">
        <h2 className="header__title">Dashboard</h2>
        <div className="btn__group">
          <Link to="/login">
            <button className=" btn login__btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn register__btn">Register</button>
          </Link>
        </div>
      </header>
      <main className="user__list__body">
        {arr.map((item) => (
          <UserCard key={item} />
        ))}
      </main>
    </section>
  );
};
export default UserLists;
