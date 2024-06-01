function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  return (
    <Card
      bgColor="primary"
      header="Create Account"
      status={status}
      body={show ? (
        <>
        Name<br/>
        <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={
          e => setName(e.currentTarget.value)} /> <br/>
        }
        </>
      ) : (
        <>
        
        
        
        </>


      )}
    
    >
  );
}
