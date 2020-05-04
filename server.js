const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

const server = http.createServer(app);

app.use(express.static("public"));

//Routes

let AddUser = (UserID, FullName, Email, Mobile) => {
  //this handle adding all users to default user account
  //Profile Pictures will only on this table
};

let AddPassword = (userID, UserEmail, UserPassword) => {
  //this handles adding passwords for all users
  //login table is a generic table for all clients regardless of type of user
};

let UpdateUserInfo = (UserID, FullName, Email, Mobile) => {
  //User this to Update userinformation on the user account table
};

let GetUserInfo = (userID) => {
  //This function returns User object
};

app.get("getUserInfo", (req, res) => {
  //this route handles getting user information
});

app.post("/login", (req, res) => {
  //handles default login
});

app.post("/signup", (req, res) => {
  //handles default signup
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
