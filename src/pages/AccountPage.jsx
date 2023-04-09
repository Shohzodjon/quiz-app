const AccountPage = () => {
  return (
    <section className="account__page">
      <header className="account__header">
        <h2 className="header__title">Create acccount</h2>
      </header>
      <form className="account__body">
        <div className="user__img">
          <div>
            <img src="" alt="user img" />
            <h4>Jhon Doe</h4>
          </div>
          <button>
            <ion-icon name="download-outline"></ion-icon>
          </button>
        </div>
        <h4>Account information </h4>
        <ul>
          <li>
            <div>
              <label htmlFor="change__name">First name</label>
              <input
                type="text"
                id="change__name"
                placeholder="First name ..."
              />
            </div>
            <div>
              <label htmlFor="change__surname"> Last name</label>
              <input
                type="text"
                id="change__surname"
                placeholder="Last name ... "
              />
            </div>
          </li>
          <li>
            <label htmlFor="change__email">Email</label>
            <input type="email" id="change__email" placeholder="Email ... " />
          </li>
          <li>
            <label htmlFor="change__address">Address</label>
            <textarea
              id="change__address"
              rows="5"
              placeholder="Address ... "
            ></textarea>
          </li>
          <li>
            <button type="submit">Save changes</button>
          </li>
        </ul>
      </form>
    </section>
  );
};
export default AccountPage;
