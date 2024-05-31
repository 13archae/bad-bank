const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);
function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: ["peter"] }}>
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
