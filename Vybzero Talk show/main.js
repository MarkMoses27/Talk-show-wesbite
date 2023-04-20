const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const productTitle = product.querySelector("h3").textContent;
  const productPrice = product.querySelector("p").textContent;
  const productImage = product.querySelector("img").src;

  // Create a new item in the cart
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  const cartContents = `
    <img src="${productImage}" alt="${productTitle}" />
    <div>
      <h3>${productTitle}</h3>
      <p>${productPrice}</p>
    </div>
  `;
  cartItem.innerHTML = cartContents;
  const cart = document.querySelector(".cart-items");
  cart.appendChild(cartItem);

  // Update the cart total
  const cartTotal = document.querySelector(".cart-total");
  const currentTotal = parseFloat(cartTotal.textContent.replace("KES ", ""));
  const price = parseFloat(productPrice.replace("KES ", ""));
  cartTotal.textContent = `KES ${(currentTotal + price).toFixed(2)}`;

  // Show the cart
  const cartOverlay = document.querySelector(".cart-overlay");
  cartOverlay.classList.add("show");
}
