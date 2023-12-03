// Simulated orders data with corresponding logos
const orders = [
  { logo: "img/chicken.png", item: "Chicken Bucket", quantity: 2, price: 13.15 },
  { logo: "img/popcorn.png", item: "Popcorn Chicken", quantity: 1, price: 7.15 },
  // Add more orders as needed
];

// Function to render orders in the table
function renderOrders() {
  const ordersTableBody = document.getElementById("ordersTableBody");
  const totalPriceElement = document.getElementById("totalPrice");

  // Clear existing rows
  ordersTableBody.innerHTML = "";

  // Insert new rows
  let totalPrice = 0;
  orders.forEach((order) => {
    const row = `<tr>
                          <td><img src="${order.logo}" alt="${order.item} Logo" style="max-width: 100px;"></td>
                          <td>${order.item}</td>
                          <td>${order.quantity}</td>
                          <td>$${order.price.toFixed(2)}</td>
                      </tr>`;
    ordersTableBody.innerHTML += row;

    totalPrice += order.price * order.quantity;
  });

  // Update total price
  totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
}

// Initial rendering
renderOrders();
