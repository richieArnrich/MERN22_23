/*
    Steps to create a simple express js server
    1: import express
        const express = require("express")
    2: instantiate express js
        const app = express() // calling the express constructor
    3: create a route for the root of the server
    app.get("/", (req, res) => {
        //do something
    });
    4: start the server on a port number
    app.listen(PORT_NUM, ()=>{
        clg("server listening on port ", PORT_NUM)
    })
*/
const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFrZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFrZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Bob Smith",
    age: 40,
    image:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFrZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Don Smith",
    age: 45,
    image:
      "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFrZSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Don Moen",
    age: 50,
    image:
      "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZha2UlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
  },
];

// simple route to say hello world
app.get("/", (req, res) => {
  res.send("Hello World, I am express");
});

app.get("/views", (req, res) => {
  // render html
  res.sendFile(__dirname + "/templates/index.html");
});

// get all users
app.get("/users", (req, res) => {
  res.json(users);
});

//get single user
app.get("/users/:id", (req, res) => {
  console.log(req);
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.json({ message: "User not found" });
  } else {
    res.json(user);
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
