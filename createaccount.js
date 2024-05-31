function CreateAccount() {
  const ctx = React.useContext(UserContext);
  ctx.users.push(Math.random().toString(36).slice(2, 7));
  return (
    <div>
      <h3>Create Account</h3>
      {JSON.stringify(ctx.users)}
    </div>
  );
}
