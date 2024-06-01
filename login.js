function Login() {
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ctx = React.useContext(UserContext);

  let success = false;

  function login() {
    setStatus("");

    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    success = ctx.users.map((user) => {
      console.log(email, password);
      console.log("user: ", user);
      if (
        user &&
        user.email.trim() == email.trim() &&
        user.password.trim() == password.trim()
      ) {
        //<Navigate to="#/home/" />;
        setStatus("Success");
        ctx.activeuser = user;
      } else {
        setStatus("Bad Login");
        return false;
      }
    });
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  return (
    <Card
      bgcolor="warning"
      txtcolor="primary"
      header="Login"
      status={status}
      body={
        <>
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
            className="
              btn
              btn-light"
            onClick={login}
          >
            Login
          </button>
        </>
      }
    ></Card>
  );
}
