function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleCreate() {
    console.log(name, email, password);

    if (!validate()) return;

    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function validate() {
    let isError = false;
    let statusString = "";
    if (!name) {
      statusString = "Error: Please enter your Name! \n";

      isError = true;
    }

    if (!email) {
      statusString = statusString + "Error: Please enter your Email! \n";

      isError = true;
    }

    if (!password) {
      statusString = statusString + "Error: Please enter your Password! \n";
      isError = true;
    }
    if (password && password.length < 8) {
      statusString =
        statusString + "Error: Password must be 8 or more characters! \n";

      isError = true;
    }

    setStatus(statusString);

    if (isError) {
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else {
      return true;
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div style={{ padding: "20px" }}>
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />{" "}
              <br />
              Email
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="input"
                className="form-control"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                //{...(!name && !email && !password ? "disabled" : "")}
                disabled={!name && !email && !password ? true : false}
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success!</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add another Account?
              </button>
            </>
          )
        }
      />
    </div>
  );
}
