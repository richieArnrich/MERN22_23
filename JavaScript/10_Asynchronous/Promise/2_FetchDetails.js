let usersArr;
let tbody = document.getElementById("tbody");
function fetchUsers() {
  // assign values for usersArr
  tbody.innerText = "Please wait..."
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      usersArr = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" },
        { id: 4, name: "Alice" },
        { id: 5, name: "Charlie" },
      ];
      resolve(usersArr);
    }, 3000);
  });
}

function displayUsers(users) {
    tbody.innerText = ""
  users.map((user) => {
    let row = document.createElement("tr");
    let idCell = document.createElement("td");
    let nameCell = document.createElement("td");
    idCell.textContent = user.id;
    nameCell.textContent = user.name;
    row.appendChild(idCell);
    row.appendChild(nameCell);
    tbody.appendChild(row);
  });
}

function fetchFailure() {
  console.log("Failed to fetch users");
}

fetchUsers().then(displayUsers).catch(fetchFailure);
