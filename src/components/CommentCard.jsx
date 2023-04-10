import ReactStars from "react-stars";
import avatar from "../images/avatar.png";
import "../styles/comment/comment-card.css";
const CommentCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="comment__card">
      <div className="comment__header">
        <img src={avatar} alt="comment card" />
        <h3>Jhon Doe</h3>
      </div>
      <div className="comment__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ut molestias accusantium nesciunt ex enim maxime unde, magnam natus,
          rerum explicabo at minus rem illo delectus praesentium iure animi
          officiis illum libero sint est nulla aut. Animi atque hic amet.
        </p>
        <div className="comment__footer">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={23}
            color1={"red"}
            color2={"#ffd700"}
            half={false}
          />
        </div>
      </div>
    </div>
  );
};
export default CommentCard;
