function Withdraw() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Withdraw</h3>
      {JSON.stringify(ctx.users)}
    </div>
  );
}
