import React from "react";
import { BarChart } from "reaviz";
import { products } from "../UserInfo/Products";
function Histogram_Chart() {
  console.log(products.sort((a, b) => b.data - a.data));
  return (
    <div>
      <BarChart
        height={400}
        width={600}
        data={products.sort((a, b) => b.data - a.data).slice(0, 10)}
      />
    </div>
  );
}

export default Histogram_Chart;
