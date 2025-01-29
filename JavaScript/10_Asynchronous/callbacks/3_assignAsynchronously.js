let users = undefined;
let loading = true;

let loadingEle = document.getElementById("loading");
let tableEle = document.getElementById("data-table");
let tbody = document.getElementById("tbody");
function assignValues(display) {
  setTimeout(() => {
    users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
      { id: 4, name: "Alice" },
      { id: 5, name: "Mike" },
    ];
    loading = false;
    display();
  }, 3000);
}

function displayDetails() {
  console.log(users);
  loadingEle.style.display = "none";
  tableEle.style.display = "block";
  users.map((user) => {
    let row = document.createElement("tr");
    let idcell = document.createElement("td");
    let namecell = document.createElement("td");
    idcell.innerHTML = user.id;
    namecell.innerHTML = user.name;
    row.appendChild(idcell);
    row.appendChild(namecell);
    tbody.appendChild(row);
  });
}

assignValues(displayDetails);

if (loading) {
  loadingEle.style.display = "block";
  tableEle.style.display = "none";
}
