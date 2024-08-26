const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const Navigate = ReactRouterDOM.useNavigate;

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    //console.log("bg: ", bg);
    //console.log("txt: ", txt);

    return "card mb-3" + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

function DataCard(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-black";
    //console.log("bg: ", bg);
    //console.log("txt: ", txt);

    return "card mb-3" + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "80%" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            {props.type && <p className="card-text">Type: {props.type}</p>}
          </div>

          <div className="col-2">
            {props.amount && (
              <p className="card-text">Amount: ${props.amount}</p>
            )}
          </div>

          <div className="col-2">
            {props.balance && (
              <p className="card-text">Balance: ${props.balance}</p>
            )}
          </div>

          <div className="col-2">
            {props.user && <p className="card-text">User: {props.user}</p>}
          </div>

          <div className="col-3">
            {props.time && <p className="card-text">Time: {props.time}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
