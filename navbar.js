function NavBar() {
  const [active, setActive] = React.useState("home");

  const setStateActive = (activepage) => {
    setActive(activepage);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#/">
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                id="home"
                title="Home is where you end-up when you login!"
                className={active === "home" ? "nav-link active" : "nav-link"}
                onClick={() => setStateActive("home")}
                href="#/"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                id="deposit"
                title="Deposit your money on this page!"
                className={
                  active === "deposit" ? "nav-link active" : "nav-link"
                }
                onClick={() => setStateActive("deposit")}
                href="#/deposit/"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                id="withdraw"
                title="You can withdraw money on this page!'"
                className={
                  active === "withdraw" ? "nav-link active" : "nav-link"
                }
                onClick={() => setStateActive("withdraw")}
                href="#/withdraw/"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                id="createaccount"
                title="Create a new account at our bank!"
                className={
                  active === "createaccount" ? "nav-link active" : "nav-link"
                }
                onClick={() => setStateActive("createaccount")}
                href="#/createaccount/"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a
                id="alldata"
                title="View your transaction history!"
                className={
                  active === "alldata" ? "nav-link active" : "nav-link"
                }
                onClick={() => setStateActive("alldata")}
                href="#/alldata/"
              >
                All Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
