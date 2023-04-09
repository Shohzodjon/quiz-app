import CommentCard from "../components/CommentCard";

const UserComment = () => {
  return (
    <section>
      <header>
        <h2 className="header__title">Users comments</h2>
      </header>
      <main>
        <CommentCard />
      </main>
    </section>
  );
};
export default UserComment;
