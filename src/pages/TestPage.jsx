import QuestionList from "../components/QuestionList";
import "../styles/test-page.css";
import clock from "../images/clock.svg";
import flag from "../images/flag.svg";
import taskList from "../helpers/question-list";
import { useState, useEffect } from "react";
const TestPage = () => {
  const [list, setList] = useState(taskList);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setList(taskList);
  }, []);

  const nextQue = () => {
    if (counter < list.length - 1) {
      setCounter((counter) => counter + 1);
    } else {
      setCounter(list.length - 1);
    }
  };
  const prevQue = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter((counter) => counter - 1);
    }
  };

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
        <div className="question__list__wrapper">
          <QuestionList data={list[counter]} />
          <div className="test__page__btn">
            <button
              className={counter > 0 ? "btn active__btn" : "btn"}
              onClick={prevQue}
            >
              Previous
            </button>
            <button className="btn active__btn" onClick={nextQue}>
              Next
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};
export default TestPage;
