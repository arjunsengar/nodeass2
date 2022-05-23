const express = require("express"); //it is very important to load express package in our application

const app = express(); //the express is function it is call and return app object
//  it is responsible for creating whether server and route and middleware

// const app = require("express")(); //another way of writing

const port = 9090; // create seprate port to allow  run our code

//here creating the route
// (/)This responds with "Hello world" on the homepage
app
  .get("/", (req, res) => {
    res.send("hello world"); //simple pass the  text data

    res.end(); //it is important to end the server
  })
  .listen(port);
