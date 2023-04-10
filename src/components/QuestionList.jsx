import "../styles/question-list.css";
const QuestionList = ({ clickFunc, answers }) => {
  return (
    <div onClick={clickFunc}>
      <label className="question__list" style={{ border: "1px solid red" }}>
        {answers}
        <input type="radio" name="radio" />
        <span className="check__question"></span>
      </label>
    </div>
  );
};
export default QuestionList;
