let outputdiv = document.querySelector(".output-div");
function submitData() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  alert(`${firstName}, ${lastName}, ${email}, ${contact}`);
  const userObj = {
    "First Name": firstName,
    "Last Name": lastName,
    Email: email,
    Contact: contact,
  };
  console.log(userObj);
  display(userObj);
  event.preventDefault();
}

function display(obj) {
  for (let prop in obj) {
    let para = document.createElement("p");
    para.innerHTML = `${prop} : ${obj[prop]}`;
    outputdiv.appendChild(para);
  }
}
