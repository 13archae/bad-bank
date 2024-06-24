function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <div>
          <h3>All Data</h3>
          {JSON.stringify(ctx)}
        </div>
      </div>
    </>
  );
}
