//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// Resistered by user
let databaseUser = "xyz@masai.com";
let databasePassword = "123xyz";

// For Login
let userID = "xyz@masai.com";
let password = "123xyb";
if (databaseUser == userID){
  if (databasePassword == password){
    console.log("login successful");
  }else {
    console.log("incorrect password");
  }
}else {
  console.log("wrong credential");
}