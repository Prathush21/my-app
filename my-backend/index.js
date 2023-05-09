import cors from "cors";
import db from "./connect.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET,POST", "PUT"],
    credentials: true,
  })
);

app.post("/api/addform", (req, res) => {
    const data = req.body.data;
    console.log(req);
  
    const sqlInsert2 =
      "insert into student ( Stu_no,Name, Address, DOB, Contact_No) values (?,?,?,?,?);";
  
    db.query(
      sqlInsert2,
      [data.studentno, data.name, data.address, data.dob, data.phonenumber],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.listen(3002, () => {
    console.log("Yey, your server is running on port 3002");
  });
  