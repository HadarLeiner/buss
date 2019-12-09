const express = require('express');
const app = express();
const port = 3000;
const dbConnection = require('./dbConnection.js');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.get('/allBusses', (req, res) => {
  console.log("ppp");
  let bussesArray;
  dbConnection.connectionPromise.then(() => {
    dbConnection.getAllBuss().then((d) => {
      console.log(d);
      bussesArray = d;
      res.send(bussesArray)
    })
  })
});

app.post('/bussesTable', async function (req, res) {
  console.log("hadar");
  let busses = [];
  dbConnection.connectionPromise
    .then(() => {
      dbConnection.getAllBuss()
        .then((d) => {
          busses = d;
          res.send(busses);
        });
    });
});

app.listen(port, () => {
  console.log("i listen to port " + port)
})
