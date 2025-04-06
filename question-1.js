// Question #1: Shipping Cost Calculator

function calculateShippingCost() {
  // เริ่มเขียนโค้ดตรงนี้
  let shippingCost = "";
  let i = 0;

  while (i < orders.length) {
    if (i !== 0) {
      shippingCost += "\n";
    }
    if (orders[i].total >= 6000) {
      shippingCost += `'Order ${orders[i].orderId}: Shipping is free.'`;
    } else if (orders[i].total >= 3000) {
      shippingCost += `'Order ${orders[i].orderId}: Shipping cost is 250 Baht.'`;
    } else {
      shippingCost += `'Order ${orders[i].orderId}: Shipping cost is 500 Baht.'`;
    }
    i++;
  }

  return shippingCost;
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
