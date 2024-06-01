function Deposit() {
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState("");

  const ctx = React.useContext(UserContext);

  console.log("activeuser: ", ctx.activeuser);

  const [balance, setBalance] = React.useState(ctx.activeuser.balance);

  function addDeposit() {
    if (deposit || deposit == 0 || typeof deposit !== "number") {
      return;
    }
    setBalance(balance + deposit);
    ctx.activeuser.balance = balance;
  }

  return (
    <>
      <Card
        bgcolor="success-subtle"
        txtcolor="black"
        header="Deposit"
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
            Deposit Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Enter Deposit Amount"
              value=""
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="
              btn
              btn-light"
              onClick={addDeposit}
            >
              Deposit
            </button>
          </>
        }
      ></Card>
    </>
  );
}
