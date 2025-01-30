let tbody = document.getElementById("tbody");

let usersArr;
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      usersArr = response;
      displayData(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayData(users) {
  console.log(users);
  users.map((user) => {
    let row = document.createElement("tr");
    let data = `<td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.phone}</td>`;
    row.innerHTML = data;
    tbody.appendChild(row);
  });
}

function search() {
  let profileEle = document.getElementById("profile");
  let searchInput = parseInt(document.getElementById("search").value);
  users.find((user) => {
    if (user.id === searchInput) {
      return user;
    }
  });
  if (user) {
    for (let prop of user) {
      let p = document.createElement("p");
      p.textContent = prop + ": " + user[prop];
      profileEle.appendChild(p);
    }
  }
}

fetchData();
