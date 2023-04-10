import BaseButton from "../components/BaseButton";
import logo from "../images/logo.svg";
import "../styles/login.css";
const LoginPage = () => {
  const handleChange = () => {
    alert("Hello");
  };
  return (
    <section className="login__page">
      <div className="login__header">
        <img src={logo} alt="logo" />
        <form>
          <div className="login__form__header">
            <h2>Welcome back!</h2>
            <p>Let's build someting great</p>
          </div>
          <ul className="login__form__list">
            <li>
              <div>
                <label htmlFor="user__email">Email</label>
                <input type="text" id="user__email" placeholder="Email ... " />
              </div>
              <span></span>
            </li>
            <li>
              <div>
                <label htmlFor="user__password">Password</label>
                <input
                  type="text"
                  placeholder="Password ... "
                  id="user__password"
                />
              </div>
              <span></span>
            </li>
            <li>
              <BaseButton context="Login" handleClick={handleChange} />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};
export default LoginPage;
