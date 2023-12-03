document.addEventListener("DOMContentLoaded", function () {
  const restaurants = ["KFC", "Hokben", "Papa Johns"];
  const restaurantList = document.getElementById("restaurant-list");

  // Populate restaurant list
  restaurants.forEach((restaurant, index) => {
    const div = document.createElement("div");
    div.textContent = restaurant;
    div.addEventListener("click", () => selectRestaurant(restaurant));
    restaurantList.appendChild(div);
  });

  document.getElementById("send-btn").addEventListener("click", sendMessage);
});

function selectRestaurant(restaurant) {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.innerHTML = `Chatting with ${restaurant}`;
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message) {
    const chatWindow = document.getElementById("chat-window");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv); // Appends new div for each message
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scrolls to the bottom
    input.value = "";
  }
}
