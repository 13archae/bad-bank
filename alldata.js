function AllData() {
  const ctx = React.useContext(UserContext);

  const ctxActivity = ctx.activity;
  const theActivities = [];

  for (let i = 0; i < ctx.activity.length; i++) {
    theActivities.push(
      <DataCard
        key={i}
        type={ctxActivity[i].type}
        amount={ctxActivity[i].amount}
        balance={ctxActivity[i].balance}
        user={ctxActivity[i].user}
        time={ctxActivity[i].time}
      />
    );
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Activity</h1>
        {theActivities}
      </div>
    </>
  );
}
