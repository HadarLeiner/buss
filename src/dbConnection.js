const mysql = require('promise-mysql');

let db;

let connectionPromise =
  //אם אני מעבירה את הפרויקט אני צריכה לשנות את הנתונים הסביבתיים
  mysql.createPool({
    connectionLimit: 100,
    host: "localhost:3000",
    user: "root",
    password: "beitar",
    database: "angular-bus"
  }).then((c) => {
    db = c;
  }).catch((e) => {
    console.error(e);
  });

async function getAllBuss() {
  let d = db.query("select * from busses");
  let busses = await d;
  return busses;
}

// async function queryConnection(str) {
//   await connectionPromise;
//   return db.query(str);
// }

module.exports = {
  connectionPromise,
  getAllBuss
}
