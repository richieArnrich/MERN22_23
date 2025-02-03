// simulating a backend function
function provideData(id, email) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (id === 1 && email === "richie@gmail.com") {
        resolve([
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
          { id: 3, name: "Bob" },
          { id: 4, name: "Alice" },
          { id: 5, name: "Ratan" },
        ]);
      } else {
        reject(JSON.stringify({ message: "Unauthorised" }));
      }
    }, 1000);
  });
}

async function fetchData() {
  try {
    let id = 10;
    let email = "richie@gmail.com";
    let data = await provideData(id, email);
    console.log(data); //exception
    console.log("I am line after data");
  } catch (err) {
    console.log(JSON.parse(err).message);
  }

  console.log("I am after try-catch");
}

fetchData();
