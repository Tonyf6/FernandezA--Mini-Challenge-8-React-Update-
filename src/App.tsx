import React from "react";
import Exercise1 from "./components/Exercise1"; // Adjust the path as necessary
import UpdatePizza from "./components/UpdatePizza";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <div>
      <Exercise1 />
      <UpdatePizza/>
      <Cart/>
    </div>
  );
};

export default App;

