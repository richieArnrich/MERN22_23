const users = [
  { name: "Rahul", email: "rahul@gmail.com", password: "rahul123" },
  { name: "Rohit", email: "rohit@gmail.com", password: "rohit123" },
  { name: "Virat", email: "virat@gmail.com", password: "virat123" },
];

// match the inputs with email and password
function handleSubmit() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    alert("Login Successfull");
  } else {
    alert("Invalid Email or Password");
  }
  event.preventDefault();
}
