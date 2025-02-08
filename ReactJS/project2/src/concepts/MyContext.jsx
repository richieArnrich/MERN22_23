import React from "react";

// create a context
export const UserContext = React.createContext(); //creating the data

// create a provider
export const UserProvider = ({ children }) => {
  //populating the data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 24,
  };
  return (
    <UserContext.Provider value={user}>
      {/* your app here */}
      {children}
    </UserContext.Provider>
  );
};
