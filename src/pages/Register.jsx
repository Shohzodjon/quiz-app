import logo from "../images/logo.svg";
import "../styles/register.css";
import { useState } from "react";
import BaseButton from "../components/BaseButton";

const RegisterPage = () => {
  const handleChange = (e) => {
    e.preventDefault();
    alert("hello");
  };
  return (
    <section className="register__page">
      <div className="container">
        <div className="register__header">
          <img src={logo} alt="logo" />
          <form>
            <div className="register__form__header">
              <h2>Create your account</h2>
              <p>It’s free and easy</p>
            </div>
            <ul className="register__form__list">
              <li>
                <label htmlFor="user__name">Full name</label>
                <input
                  type="text"
                  id="user__name"
                  placeholder="Full name ..."
                />
              </li>
              <li>
                <div>
                  <label htmlFor="user__email">Email</label>
                  <input
                    type="text"
                    id="user__email"
                    placeholder="Email ... "
                  />
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
                <BaseButton context="Register" handleClick={handleChange} />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};
export default RegisterPage;
