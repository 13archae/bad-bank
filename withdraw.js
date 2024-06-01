function withdraw() {
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState(0);

  const ctx = React.useContext(UserContext);

  console.log("activeuser: ", ctx.activeuser);

  const [balance, setBalance] = React.useState(ctx.activeuser.balance);

  function subtractWithdraw() {
    if (withdraw || withdraw == 0 || typeof withdraw !== "number") {
      console.log("Bad Withdraw");
      return;
    }
    setBalance(balance + withdraw);
    ctx.activeuser.balance = balance;
  }

  return (
    <>
      <Card
        bgcolor="info-subtle"
        txtcolor="black"
        header="Withdraw"
        status={status}
        body={
          <>
            <div className="row">
              <div className="col-6">
                <h5>Balance: </h5>
              </div>
              <div className="col-6">
                <h5>${balance}</h5>
              </div>
            </div>
            <br />
            Withdraw Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Enter Withdraw Amount"
              value=""
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="
              btn
              btn-light"
              onClick={subtractWithdraw}
            >
              Withdraw
            </button>
          </>
        }
      ></Card>
    </>
  );
}
