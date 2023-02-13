import React, { useState } from "react";
import { PieChart } from "reaviz";
import { products } from "../UserInfo/Products";
function Pie() {
  return (
    <div>
      <PieChart
        height={400}
        width={600}
        data={products.sort((a, b) => b.data - a.data).slice(0, 5)}
      />
    </div>
  );
}

export default Pie;
