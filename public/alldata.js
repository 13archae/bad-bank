function AllData() {
  const [data, setData] = React.useState("");
  const url = "http://localhost:3000/account/all";

  React.useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const alldata = await res.json();
      const alldatastring = JSON.stringify(alldata);
      console.log(alldatastring);
      setData(alldatastring);
    })();

    /* fetch("/account/all")
      .then((response) => response.json)
      .then((theData) => {
        const stringData = JSON.stringify(theData);
        console.log("stringData:  ", stringData);
        setData(stringData);
      })
      .catch((err) => {
        console.log("err:  ", err);
      }); */
  }, []);

  /*   const ctxActivity = ctx.activity;
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
    ); */

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>All Data in Bad Bank</h1>
        The Data: <br />
        <br />
        {data}
      </div>
    </>
  );
}
