import CommentCard from "../components/CommentCard";
import NewComment from "../components/NewComment";
import "../styles/comment-page.css";
const UserComment = () => {
  return (
    <section className="comment__page">
      <header className="comment__page__header">
        <h2 className="header__title">Users comments</h2>
      </header>
      <section className="comment__page__flex">
        <article className="comment__page__flex-left">
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </article>
        <div className="comment__page__flex-right">
          <NewComment />
        </div>
      </section>
    </section>
  );
};
export default UserComment;
