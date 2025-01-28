let result = document.querySelector(".results");
function handleSubmit() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operation = document.getElementById("operations").value;

  switch (operation) {
    case "add":
      {
        let r = num1 + num2;
        result.innerHTML = r;
        alert(r);
      }
      break;
    case "sub":
      {
        let r = num1 - num2;
        result.innerHTML = r;
      }
      break;
    default: {
      result.innerHTML = "Invalid operation";
    }
  }
  event.preventDefault();
}
