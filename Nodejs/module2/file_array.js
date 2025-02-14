// i want users array data to be written onto users.txt
// so i can read it later
const fs = require("fs");
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" },
  { id: 4, name: "Don Smith", email: "don@example.com" },
];

// fs.writeFileSync("users.txt", JSON.stringify(users, null, 2));
let filename = "users2.txt";
users.map((user) => {
  let data = `\nid : ${user.id} \nname: ${user.name} \nemail: ${user.email}\n------`;
  fs.appendFileSync(filename, data);
});
