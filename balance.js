function Balance() {
  const ctx = React.useContext(UserContext);
  return (
    <div>
      <h3>Balance</h3>
      {JSON.stringify(ctx.users)}
    </div>
  );
}
