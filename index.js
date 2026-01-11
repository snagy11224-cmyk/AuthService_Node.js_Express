const express = require("express"); //importing express module
const app = express(); //app is an object returned by express function
app.use(express.json()); //to make the app able to parse json data
const port = 4000; //open port --> to communicate with ip address (host)

//get endpoint
//req,res are built in express objects
app.get("/message", (req, res) => {
  res.status(200).json({ message: "Hello from Get request" }); //can set both in one line
});

//post endpoint
app.post("/hello", (req, res) => {
const name=req.body.name;  //getting name from request body
res.status(201).json({ message: `Hello ${name}` });
});

//patch endpoint
app.patch("/", (req, res) => {
  res.send("Hello from Patch request");
});

//delete endpoint
app.delete("/", (req, res) => {
  res.send("Hello from Delete request");
}); 

//to make the server listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
