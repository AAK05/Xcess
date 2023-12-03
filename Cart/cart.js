function changeQuantity(button, action, priceOption, qNum) {
  var quantityElement = document.querySelector(".quantity" + qNum);
  var currentQuantity = parseInt(quantityElement.textContent);
  var pricePerItem = priceOption; // Example price, replace with your actual price

  updatePrice(currentQuantity, pricePerItem, action, currentQuantity);
  if (action === "increase") {
    currentQuantity++;
  } else if (action === "decrease" && currentQuantity > 0) {
    currentQuantity--;
  }

  quantityElement.textContent = currentQuantity;
}

function updatePrice(quantity, pricePerItem, action, currentQuantity) {
  var changedPrice = pricePerItem;
  var priceElement = document.querySelector(".card-text");
  var totalPriceElement = document.querySelector(".total");
  if (action === "increase") {
    var totalPrice = parseFloat(totalPriceElement.textContent) + changedPrice;

    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
  } else if (action === "decrease" && currentQuantity > 0) {
    var totalPrice = parseFloat(totalPriceElement.textContent) - changedPrice;
    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
  }
}
