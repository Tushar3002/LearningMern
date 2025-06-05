const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require("express");
const app=express();  
const path=require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: "delta_app",
  password: 'tusharjana'
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];

// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }

app.get("/",(req,res)=>{
  let q=`SELECT count(*) FROM user`;
  connection.query(q,(err, result) => {
  if (err) {
    console.error("error:", err);
  } else {
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
  }
  // no need for connection.end() as it will be over after 
});
  
});

app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;

  connection.query(q,(err, users) => {
  if (err) {
    console.error("error:", err);
  } else {
    
    res.render("showusers.ejs",{users});
  }
});
});

//Edit Route
app.get("/user/:id/edit",(req,res)=>{
  let { id } = req.params;
  let q=`select * from user where id='${id}'`;

  connection.query(q,(err, result) => {
  if (err) {
    console.error("error:", err);
  } else {
    let user=result[0];
    res.render("edit.ejs",{user});
  }
});
});


//Update

app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  const { password: formPass, username: newUsername } = req.body;

  // Get user by ID
  const getUserQuery = `SELECT * FROM user WHERE id = ?`;
  connection.query(getUserQuery, [id], (err, result) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).send("Database error");
    }

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    const user = result[0];

    if (formPass !== user.password) {
      return res.send("WRONG");
    }

    // Update username if password matches
    const updateUserQuery = `UPDATE user SET username = ? WHERE id = ?`;
    connection.query(updateUserQuery, [newUsername, id], (err, updateResult) => {
      if (err) {
        console.error("Update error:", err);
        return res.status(500).send("Failed to update user");
      }

      return res.redirect("/user");
    });
  });
});

app.listen("8080",()=>{
  console.log("server listening in port 8080");
});

//connection.query(q, [data], (err, result) => {
//   if (err) {
//     console.error("Insert error:", err);
//   } else {
//     console.log(`✅ Inserted ${result.affectedRows} users.`);
//   }
//   connection.end();
// });