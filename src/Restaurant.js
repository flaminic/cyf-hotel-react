import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="m-5">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Pasta" />
        <Order orderType="Cholate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
