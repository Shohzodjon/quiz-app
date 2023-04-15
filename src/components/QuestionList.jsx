import "../styles/question-list.css";
const QuestionList = ({ data }) => {
  const test = (el) => {
    console.log(el.target.value);
  };
  return (
    <div className="question__wrapper">
      <h4>{data.task}</h4>
      {data.answers.map((answer) => (
        <div className="question__flex" key={answer.id}>
          <input type="radio" name="radio" onClick={test} value={answer.id} />
          <label className="question__list">{answer.answer}</label>
        </div>
      ))}
    </div>
  );
};
export default QuestionList;
