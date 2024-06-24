function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Chris",
              email: "13archae@gmail.com",
              password: "foo",
              balance: "100",
            },
          ],
          activeuser: {},
          navitem: "home",
        }}
      >
        <Route path="/" exact component={Home}></Route>
        <Route path="/createaccount/" component={CreateAccount}></Route>
        <Route path="/login/" component={Login}></Route>
        <Route path="/deposit/" component={Deposit}></Route>
        <Route path="/withdraw/" component={Withdraw}></Route>
        <Route path="/balance/" component={Balance}></Route>
        <Route path="/alldata/" component={AllData}></Route>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
