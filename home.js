function Home() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="black"
      header="Bad Bank"
      title="Welcome to your banking home!"
      text="We will care for all of your banking needs."
      body={
        <i
          className="fa-solid fa-piggy-bank img-fluid fa-2xl"
          style={{ color: "MediumSlateBlue" }}
          alt="Bank Logo"
        ></i>
      }
    />
  );
}
