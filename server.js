const express = require("express");
const http = require("http");
const mysql = require("mysql");
const path = require("path");
const uuid = require("uuid");

const app = express();

const server = http.createServer(app);

//middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//db queries
var dbConnectionProps = {
  host: "127.0.0.1",
  user: "root",
  password: "Password@2020",
  database: "nerdariesdb",
};

let AddUser = (FullName, Email, Mobile, Password, callback) => {
  //this handle adding all users to default user account
  //Profile Pictures will only on this table
  let UserID = uuid.v4();
  var connection = mysql.createConnection(dbConnectionProps);

  connection.connect();

  connection.query(
    `INSERT INTO users (StringID, name, email, mobile) values ('${UserID}','${FullName}', '${Email}', '${Mobile}')`,
    function (error, results) {
      if (error) throw error;
      GetUserInfoByInfo(FullName, Email, Mobile, (data) => {
        AddPassword(data[0].id, Email, Password);
        callback(data);
      });
    }
  );

  connection.end();
};

let AddPassword = (userID, UserEmail, UserPassword) => {
  //this handles adding passwords for all users
  //login table is a generic table for all clients regardless of type of user
  let UserID = uuid.v4();
  var connection = mysql.createConnection(dbConnectionProps);

  connection.connect();

  connection.query(
    `INSERT INTO login (user_id, email, password) values ('${userID}','${UserEmail}', '${UserPassword}')`,
    function (error, results) {
      if (error) throw error;
      console.log("User Added!");
    }
  );

  connection.end();
};

let UpdateUserInfo = (UserID, FullName, Email, Mobile) => {
  //User this to Update userinformation on the user account table
};

let GetUserInfoByInfo = (fullName, Email, Mobile, callback) => {
  var con = mysql.createConnection(dbConnectionProps);

  con.connect(function (err) {
    if (err) throw err;
    con.query(
      `SELECT * FROM users WHERE name = '${fullName}' and email = '${Email}' and mobile = '${Mobile}' `,
      function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        callback(result);
      }
    );
  });
};

let GetUserInfo = (userID, callback) => {
  //This function returns User object
  var con = mysql.createConnection(dbConnectionProps);

  con.connect(function (err) {
    if (err) throw err;
    con.query(`SELECT * FROM users WHERE id = '${userID}' `, function (
      err,
      result,
      fields
    ) {
      if (err) throw err;
      //console.log(result);
      callback(result);
    });
  });
};

let ProcessLogin = (email, password, callback) => {
  var con = mysql.createConnection(dbConnectionProps);

  con.connect(function (err) {
    if (err) throw err;
    con.query(
      `SELECT * FROM login WHERE email = '${email}' AND password = '${password}' `,
      function (err, result, fields) {
        if (err) throw err;
        if (result.length === 0) {
          console.log("login unsuccessful");
          callback([{ Msg: "check your email and password" }]);
        } else {
          //console.log(result);
          GetUserInfo(result[0].id, (data) => {
            callback(data);
          });
        }
      }
    );
  });
};

//Routes
app.get("getUserInfo", (req, res) => {
  //this route handles getting user information
});

app.post("/login", (req, res) => {
  //handles default login
  let email = req.body.email;
  let password = req.body.password;
  ProcessLogin(email, password, (data) => {
    console.table(data[0]);
    res.json(data[0]);
  });
});

app.post("/signup", (req, res) => {
  //handles default signup
  let fullname = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let mobile = req.body.mobile;
  AddUser(fullname, email, mobile, password, (data) => {
    console.table(data[0]);
    res.json(data[0]);
  });
});

app.post("/RegisterWebsiteClient", (req, res) => {
  //handles signup for new website clients
});

app.post("/RegisterTutoringClient", (req, res) => {
  //hadles signup for new tutoring student
});

app.post("/UploadProfilePicture", (req, res) => {
  //handles all clients Profile Upload
});
app.post("UpdateProfilePicture", (req, res) => {
  //handles updating user profile picture
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server Started on PORT " + PORT);
});
