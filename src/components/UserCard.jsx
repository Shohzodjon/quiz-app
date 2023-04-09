import calendar from "../images/calendar.svg";
import clock from "../images/clock.svg";
import avatar from "../images/avatar.png";
import "../styles/user-card.css";
const UserCard = () => {
  return (
    <div className="user__card">
      <div className="user__img">
        <img src={avatar} alt="user img" />
      </div>
      <h3 className="user__name">Salom</h3>
      <p className="user__title">Label</p>
      <div className="user__card__flex">
        <div className="card__flex__left">
          <img src={calendar} alt="calendar img" />
          <span>23.03.2023</span>
        </div>
        <div className="card__flex__right">
          <img src={clock} alt="clock img" />
          <span>12:00-14:00</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
