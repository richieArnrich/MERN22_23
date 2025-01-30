let tbody = document.getElementById("tbody");

let usersArr;
function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      usersArr = response;
      console.log(usersArr);
      //   displayData(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function search() {
  let profileEle = document.getElementById("profile");
  let searchInput = parseInt(document.getElementById("search").value);
  let user = usersArr.find((user) => {
    if (user.id === searchInput) {
      return user;
    }
  });
  if (user) {
    for (let prop in user) {
      let p = document.createElement("p");
      p.textContent = prop + ": " + user[prop];
      profileEle.appendChild(p);
    }
  }
}

fetchData();
