// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Mengambil data cart dari local storage
const storedKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
const cart = storedKeranjang;

// Fungsi untuk menambahkan item ke keranjang
function addToCart(itemName, itemPrice) {
  // Cek apakah item sudah ada di keranjang
  const existingItem = cart.find((item) => item.name === itemName && item.price === itemPrice);

  if (existingItem) {
    // Jika item sudah ada, tingkatkan jumlahnya
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    // Jika item belum ada, tambahkan ke keranjang dengan jumlah 1
    const item = { name: itemName, price: itemPrice, quantity: 1 };
    cart.push(item);
  }

  // Memperbarui tampilan keranjang
  updateCartDisplay();

  // Menyimpan keranjang ke dalam localStorage
  saveCartToLocalStorage();
}


// Fungsi untuk menghapus item dari keranjang
function removeFromcart(itemName, itemPrice) {
  // Cari indeks item yang akan dihapus
  const index = cart.findIndex(
    (item) => item.name === itemName && item.price === itemPrice
  );

  // Hapus item jika ditemukan
  if (index !== -1) {
    // Kurangi jumlahnya jika lebih dari 1, jika tidak hapus item
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    
  }
  
  // Memperbarui tampilan keranjang
  updateCartDisplay();

  // Menyimpan keranjang ke dalam localStorage
  saveCartToLocalStorage();
}
}


// Fungsi untuk memperbarui tampilan keranjang pada halaman
function updateCartDisplay() {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Mengosongkan elemen keranjang sebelum diperbarui
  cartItemsElement.innerHTML = "";

  // Menambahkan setiap item ke dalam elemen keranjang
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - Rp ${item.price.toFixed(3)} x ${item.quantity || 1}`;
    cartItemsElement.appendChild(listItem);
  });

  // Menghitung total harga dari seluruh item dalam keranjang
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  cartTotalElement.textContent = total.toFixed(3);

  // Menyimpan total harga ke dalam localStorage
  saveTotalToLocalStorage(total.toFixed(3));
}

// Fungsi untuk menyimpan keranjang ke dalam localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("keranjang", JSON.stringify(cart));
}

// Fungsi untuk menyimpan total harga ke dalam localStorage
function saveTotalToLocalStorage(total) {
  localStorage.setItem("total", total);
}

// Fungsi untuk memuat keranjang dari localStorage
function loadCartFromLocalStorage() {
  const storedKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  cart.push(...storedKeranjang);
}

// Memanggil fungsi updateCartDisplay untuk pembaruan awal
updateCartDisplay();
