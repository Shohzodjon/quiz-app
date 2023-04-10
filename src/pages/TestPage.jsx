import QuestionList from "../components/QuestionList";
import clock from "../images/clock.svg";
import flag from "../images/flag.svg";
const TestPage = () => {
  const arr = [
    {
      text: "SSSSS",
      id: 1,
    },
    {
      text: "wewerwer",
      id: 2,
    },
    {
      text: "totmtmt",
      id: 3,
    },
  ];
  const testClick = (e) => {
    alert(`${e}`);
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
        <h4>Najot Ta’lim’ga qachon va qayerda, kim tomonidan asos solingan?</h4>
        {arr.map((item) => (
          <QuestionList
            key={item.id}
            clickFunc={() => testClick(item.text)}
            answers={item.text}
          />
        ))}
      </main>
    </section>
  );
};
export default TestPage;
