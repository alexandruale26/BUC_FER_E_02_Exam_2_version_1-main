import React from "react";
import { createRoot } from "react-dom/client";

const UserDetails = ({ name, surname, address, postcode, city }) => {
  return (
    <div className="card">
      <div>
        <h5>
          {name} {surname}
        </h5>
        <div>{address}</div>
        <div>
          {postcode} {city}
        </div>
      </div>
    </div>
  );
};

const user = {
  name: "James",
  surname: "Collins",
  address: "92 Wright Ave",
  postcode: 11729,
  city: "New York",
};

const App = () => {
  return <UserDetails {...user} />;
};

/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
