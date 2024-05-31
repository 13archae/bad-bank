const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);
function Spa() {
  return (
    <HashRouter>
      <div>
        <h1>Routing - Hello World</h1>
        <Nav />
        <hr></hr>
        <UserContext.Provider value={{ users: ["peter"] }}>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about/" component={About}></Route>
          <Route path="/products/" component={Products}></Route>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
