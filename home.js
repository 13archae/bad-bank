function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <div style={{ padding: "20px" }}>
      <Card
        txtcolor="black"
        header="Bad Bank"
        title="Welcome to your banking home!"
        text="We will care for all of your banking needs."
        body={
          <div className="row">
            <div className="col-6">
              <h3>Trust Us!</h3>
            </div>
            <div className="col-6">
              <i
                className="fa-solid fa-piggy-bank img-fluid fa-5x"
                style={{ color: "MediumSlateBlue", size: "8em" }}
                alt="Bank Logo"
              ></i>
            </div>
          </div>
        }
      />
    </div>
  );
}
