const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const sql = "select * from student";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO `student`( `name`, `email`) VALUES (?)";

  const values = [req.body.name, req.body.email];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
