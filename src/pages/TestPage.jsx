import QuestionList from "../components/QuestionList";
import "../styles/test-page.css";
import clock from "../images/clock.svg";
import flag from "../images/flag.svg";
import taskList from "../helpers/question-list";
import { useState, useEffect } from "react";
const TestPage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(taskList);
  }, []);
  return (
    <section className="test__page">
      <header className="test__page__header">
        <h2 className="header__title">Test</h2>
        <div className="header__flex">
          <img src={clock} alt="clock img" />
          <span>14:05</span>
          <button>
            <img src={flag} alt="flag img" />
            Yakunlash
          </button>
        </div>
      </header>

      <main>
        <div style={{ border: "1px solid red" }}>
          <QuestionList data={list[0]} />

          <div className="test__page__btn">
            <button className="btn ">Previous</button>
            <button className="btn active__btn">Next</button>
          </div>
        </div>
      </main>
    </section>
  );
};
export default TestPage;
