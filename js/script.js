// Toggle class active untuk shopping cart
const shooppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shooppingCart.classList.toggle("active");
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
  }
  
  // Memperbarui tampilan keranjang
  updateCartDisplay();

  // Menyimpan keranjang ke dalam localStorage
  saveCartToLocalStorage();
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
    listItem.textContent = `${item.name} - Rp ${item.price.toFixed(3)}`;
    cartItemsElement.appendChild(listItem);
  });

  // Menghitung total harga dari seluruh item dalam keranjang
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  cartTotalElement.textContent = total.toFixed(3);

  // Menyimpan total harga ke dalam localStorage
  saveTotalToLocalStorage(total.toFixed(3));

  // Menetapkan nilai total harga ke dalam input dengan ID 'form-total'
}

// Fungsi untuk menyimpan keranjang ke dalam localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("keranjang", JSON.stringify(cart));
  console.log(localStorage);
}

// Fungsi untuk menyimpan total harga ke dalam localStorage
function saveTotalToLocalStorage(total) {
  localStorage.setItem("total", total);
}

function displayAppetizers(appetizers) {
  let appetizerMenu = document.getElementById("menu-appetizer");
  appetizers.forEach(function (appetizer) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-1");
    menuItem.innerHTML = `
            <div class="konten-1">
                <img id="food-img" src="${appetizer.imageUrl}" />
                <h2> ${appetizer.nama} </h2>
                <h4> Rp${appetizer.price}.000 </h4>
                <div class="menu-button">
                    <img class="remove-order" style="float: left;" src="assets\minus-circle.svg"
                        onclick="removeFromcart('${appetizer.nama}', ${appetizer.price})" />
                    <img class="add-order" style="float: right;" src="assets\plus-circle.svg"
                        onclick="addToCart('${appetizer.nama}', ${appetizer.price})" />
                </div>
            </div>
        `;
    appetizerMenu.appendChild(menuItem);
  });
}

function fetchAppetizers() {
  fetch("http://localhost:3000/product/:catalogId")
    .then((response) => response.json())
    .then((data) => displayAppetizers(data))
    .catch((error) => console.error("Error:", error));
}

// Fungsi untuk memuat keranjang dari localStorage

fetchImage();

// Memanggil fungsi updateCartDisplay untuk pembaruan awal
updateCartDisplay();
