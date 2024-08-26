const express = require("express");
const app = express();
const cors = require("cors");
const dal = require("./dal.js");

app.use(express.static("public"));
app.use(cors());

//  *** ROUTES ***//
app.get("/account/create/:name/:email/:password", (req, res) => {
  console.log("name:  ", req.params.name);
  console.log("email:  ", req.params.email);
  console.log("password:  ", req.params.password);
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => {
      console.log("error:  ", err);
    });
});

app.get("/account/login/:email/:password", (req, res) => {
  res.send({
    email: req.params.email,
    password: req.params.password,
  });
});

app.get("/account/all", (req, res) => {
  console.log("in endpoint:  /account/all");
  dal
    .all()
    .then((docs) => {
      //console.log(docs);
      res.send(docs);
    })
    .catch((err) => {
      console.log("error:  ", err);
    });
});

app.get("/rest/:num/:num2", (req, res) => {
  console.log("sent /rest/" + req.params.num);
  res.send("/rest route" + req.params.num + " " + req.params.num2);
});

//run app
const port = 3000;
app.listen(port);
console.log(`running on port  ${port}`);
