import "../styles/account.css";
const AccountPage = () => {
  return (
    <section className="account__page">
      <header className="account__header">
        <h2 className="header__title">Create acccount</h2>
      </header>
      <form className="account__body">
        <div className="user__img">
          <div className="img__wrapper">
            <img src="" alt="user img" />
            <h4>Jhon Doe</h4>
          </div>
          <button className="upload__btn" type="button">
            <ion-icon name="download-outline"></ion-icon>
          </button>
        </div>
        <h4>Account information </h4>
        <ul>
          <li>
            <div className="flex__box">
              <label htmlFor="change__name" className="account__label">
                First name
              </label>
              <input
                type="text"
                id="change__name"
                placeholder="First name ..."
                className="account__input"
              />
            </div>
            <div className="flex__box">
              <label htmlFor="change__surname" className="account__label">
                Last name
              </label>
              <input
                type="text"
                id="change__surname"
                placeholder="Last name ... "
                className="account__input"
              />
            </div>
          </li>
          <li>
            <label htmlFor="change__email" className="account__label">
              Email
            </label>
            <input
              type="email"
              id="change__email"
              placeholder="Email ... "
              className="account__input"
            />
          </li>
          <li>
            <label htmlFor="change__address" className="account__label">
              Address
            </label>
            <textarea
              id="change__address"
              rows="2"
              placeholder="Address ... "
              className="account__input"
            ></textarea>
          </li>
          <li>
            <button type="submit" className="account__btn">
              Save changes
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};
export default AccountPage;
