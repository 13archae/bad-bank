function Withdraw() {
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState(null);
  const [safeWithdraw, setSafeWithdraw] = React.useState(false);

  const ctx = React.useContext(UserContext);

  //console.log("activeuser: ", ctx.activeuser);

  const [balance, setBalance] = React.useState(
    ctx.users[ctx.users.length - 1].balance
  );

  const updateWithdraw = (value) => {
    console.log("value: ", value);
    if (value === "") {
      console.log("in empty");
      setSafeWithdraw(false);
      setWithdraw(value);
      return;
    }
    if (Number.isNaN(parseInt(value))) {
      console.log("in nan");
      setStatus("Error: You have entered a non-numeric value!");
      setTimeout(() => setStatus(""), 3000);
      setSafeWithdraw(false);
      setWithdraw(value);
      return;
    }
    if (value < 0) {
      setStatus("Error: You have entered a negative value!");
      setTimeout(() => setStatus(""), 3000);
      setSafeWithdraw(false);
      setWithdraw(value);
      return;
    }
    if (value > parseInt(balance)) {
      setStatus("Error: You have exceeded your balance!");
      setTimeout(() => setStatus(""), 3000);
      setSafeWithdraw(false);
      setWithdraw(value);
      return;
    }
    console.log("all-pass");
    setSafeWithdraw(true);
    setWithdraw(value);
  };

  function subtractWithdraw() {
    if (!withdraw || withdraw == 0 || typeof parseInt(withdraw) === null) {
      console.log("Bad Withdraw");
      return;
    }

    const theBalance = parseInt(balance) - parseInt(withdraw);
    setBalance(theBalance);
    ctx.users[ctx.users.length - 1].balance = theBalance;

    setStatus("Success!");
    setTimeout(() => setStatus(""), 3000);

    setWithdraw(null);
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
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
                value={!withdraw ? "" : withdraw}
                onChange={(e) => updateWithdraw(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="
              btn
              btn-light"
                disabled={safeWithdraw ? false : true}
                onClick={subtractWithdraw}
              >
                Withdraw
              </button>
            </>
          }
        ></Card>
      </div>
    </>
  );
}
