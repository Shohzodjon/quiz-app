import ReactStars from "react-stars";
import "../styles/comment/new-comment.css";
const NewComment = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="new__comment">
      <header>
        <h3>Leave a comment</h3>
      </header>
      <form className="new__comment__form">
        <div className="textarea__wrapp">
          <label htmlFor="new__comment__message">Message</label>
          <textarea
            rows="5"
            placeholder="Message ... "
            id="new__comment__message"
          ></textarea>
        </div>
        <div className="textarea__wrapp">
          <label htmlFor="new__comment__name">Name</label>
          <input type="text" id="new__comment__name" />
        </div>
        <div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            color1={"lime"}
            color2={"#ffd700"}
            half={false}
          />
        </div>
      </form>
    </div>
  );
};
export default NewComment;
