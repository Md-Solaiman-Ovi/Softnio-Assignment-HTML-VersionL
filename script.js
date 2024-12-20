let cart = [];
let cartCount = 0;

const mainThumbnail = document.getElementById("mainThumbnail");
const cartCountEls = document.querySelectorAll(".cart-count");
const floatingCheckout = document.getElementById("floatingCheckout");
const quantityDisplay = document.getElementById("quantity");

let selectedSize = null;
let selectedColor = null; // Track the selected color
let quantity = 1;

// Change the thumbnail image based on the selected color
function changeColor(color) {
  const imageMap = {
    purple: "./assets/watch-purple.jpg",
    blue: "./assets/watch-blue.jpg",
    black: "./assets/watch-black.jpg",
  };
  selectedColor = color; // Update the selected color
  mainThumbnail.src = imageMap[color];
}

// Select wrist size
document.querySelectorAll(".size-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedSize = btn.value;
    document
      .querySelectorAll(".size-btn")
      .forEach((b) => b.classList.remove("ring-2", "ring-blue-500"));
    btn.classList.add("ring-2", "ring-blue-500");
  });
});

// Increase quantity
function increaseQuantity() {
  quantity++;
  updateQuantityDisplay();
}

// Decrease quantity
function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantityDisplay();
  }
}

// Update the quantity display on the details page
function updateQuantityDisplay() {
  quantityDisplay.textContent = quantity;
}

// Add selected product to the cart
function addToCart() {
  if (!selectedSize || !selectedColor) {
    alert("Please select a wrist size and brand color.");
    return;
  }

  // Check if the item with the same size and color already exists in the cart
  const existingItem = cart.find(
    (item) => item.size === selectedSize && item.color === selectedColor
  );

  if (existingItem) {
    // If the item exists, update its quantity and total price
    existingItem.quantity += quantity;
    existingItem.price += getPrice(selectedSize) * quantity;
  } else {
    // If the item doesn't exist, add it to the cart
    const item = {
      image: mainThumbnail.src,
      size: selectedSize,
      color: selectedColor, // Add the color
      quantity,
      price: getPrice(selectedSize) * quantity,
    };
    cart.push(item);
  }

  cartCount += quantity;
  updateFloatingCheckout();
}

// Get price based on wrist size
function getPrice(size) {
  const priceMap = { S: 69, M: 79, L: 89, XL: 99 };
  return priceMap[size];
}

// Update floating Checkout button
function updateFloatingCheckout() {
  cartCountEls.forEach((el) => (el.textContent = cartCount));
  floatingCheckout.classList.remove("hidden");
}

// Open Cart modal and display cart items
function openCartModal() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");

  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price;

    cartItemsContainer.innerHTML += `
      <tr class="text-sm font-normal">
        <td class="py-2 flex items-center space-x-2">
          <img src="${item.image}" alt="Cart Item" class="w-10 h-10 rounded">
          <span>Classy Modern Smart Watch</span>
        </td>
        <td class="py-2">${item.color.charAt(0).toUpperCase() + item.color.slice(1)}</td> <!-- Display color -->
        <td class="py-2 font-bold">${item.size}</td>
        <td class="py-2 font-bold">${item.quantity}</td>
        <td class="py-2 font-bold">$${item.price.toFixed(2)}</td>
      </tr>
    `;
  });

  cartTotalEl.textContent = totalPrice.toFixed(2);
  const cartModal = document.getElementById("cartModal");
  cartModal.classList.remove("hidden");
}

// Remove an item from the cart
function removeCartItem(size, color) {
  const itemIndex = cart.findIndex(
    (item) => item.size === size && item.color === color
  );

  if (itemIndex !== -1) {
    cartCount -= cart[itemIndex].quantity;
    cart.splice(itemIndex, 1);

    updateFloatingCheckout();
    openCartModal();

    if (cart.length === 0) {
      floatingCheckout.classList.add("hidden");
    }
  }
}

// Close Cart modal
function closeCartModal() {
  const cartModal = document.getElementById("cartModal");
  cartModal.classList.add("hidden");
}
