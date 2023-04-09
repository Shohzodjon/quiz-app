const CommentCard = () => {
  return (
    <div className="comment__card">
      <div className="comment__header">
        <img src="" alt="comment card" />
        <h3>Jhon Doe</h3>
      </div>
      <div className="comment__body">
        <div className="comment__context">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ut molestias accusantium nesciunt ex enim maxime unde, magnam natus,
            rerum explicabo at minus rem illo delectus praesentium iure animi
            officiis illum libero sint est nulla aut. Animi atque hic amet.
          </p>
        </div>
        <div className="comment__footer">
          <button>
            <ion-icon name="star"></ion-icon>
          </button>
          <button>
            <ion-icon name="star"></ion-icon>
          </button>
          <button>
            <ion-icon name="star"></ion-icon>
          </button>
          <button>
            <ion-icon name="star"></ion-icon>
          </button>
          <button>
            <ion-icon name="star"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentCard;
