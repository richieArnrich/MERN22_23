import React, { useState } from "react";

function Event6() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit() {
    alert(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
  }
  return (
    <div>
      <h1>Registeration Form</h1>
      <form>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label for="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit Form</button>
      </form>
    </div>
  );
}

export default Event6;
