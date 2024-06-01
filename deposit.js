function Deposit() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Deposit</h3>
      {JSON.stringify(ctx)}
    </div>
  );
}
