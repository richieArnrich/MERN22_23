let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Kaayy", age: 20 },
];
let tbody = document.getElementById("users-table");
users.map((user) => {
  let row = document.createElement("tr");
  let idCell = document.createElement("td");
  let nameCell = document.createElement("td");
  let ageCell = document.createElement("td");
  nameCell.innerHTML = user.name;
  idCell.innerHTML = user.id;
  ageCell.innerHTML = user.age;
  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  tbody.appendChild(row);
});
