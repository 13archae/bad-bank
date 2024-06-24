function Deposit() {
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState(null);
  const [safeDeposit, setSafeDeposit] = React.useState(false);

  const ctx = React.useContext(UserContext);

  console.log("activeuser: ", JSON.stringify(ctx.users[ctx.users.length - 1]));

  const [balance, setBalance] = React.useState(
    ctx.users[ctx.users.length - 1].balance
  );

  const updateDeposit = (value) => {
    console.log("value: ", value);
    //console.log("Number.isNaN(value): ", Number.isNaN(parseInt(value)));
    if (value === "") {
      setSafeDeposit(false);
      setDeposit(value);
      return;
    }
    if (Number.isNaN(parseInt(value))) {
      console.log("in nan");
      setStatus("Error: You have entered a non-numeric value!");
      setTimeout(() => setStatus(""), 3000);
      setSafeDeposit(false);
      setDeposit(value);
      return;
    }
    if (value < 0) {
      setStatus("Error: You have entered a negative value!");
      setTimeout(() => setStatus(""), 3000);
      setSafeDeposit(false);
      setDeposit(value);
      return;
    }
    setSafeDeposit(true);
    setDeposit(value);
  };

  function addDeposit() {
    console.log("in addDeposit: ", deposit);

    //                              typeof deposit !== 'number
    if (!deposit || deposit == 0 || typeof parseInt(deposit) === null) {
      console.log("in if");
      return;
    }

    const theBalance = parseInt(balance) + parseInt(deposit);
    setBalance(theBalance);
    ctx.users[ctx.users.length - 1].balance = theBalance;

    setStatus("Success!");
    setTimeout(() => setStatus(""), 3000);

    setDeposit(null);
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
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
                onChange={(e) => {
                  console.log("e: ", e);
                  updateDeposit(e.currentTarget.value);
                }}
                value={!deposit ? "" : deposit}
              />
              <br />
              <button
                type="submit"
                className="
              btn
              btn-light"
                disabled={safeDeposit ? false : true}
                onClick={addDeposit}
              >
                Deposit
              </button>
            </>
          }
        ></Card>
      </div>
    </>
  );
}
