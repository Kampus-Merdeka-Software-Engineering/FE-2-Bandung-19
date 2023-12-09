// Mengambil data cart dari local storage
const storedKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
const cart = storedKeranjang;

console.log(storedKeranjang);

// Fungsi untuk memuat keranjang dari localStorage
function loadCartFromLocalStorage() {
  const storedKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  cart.push(...storedKeranjang);
}
// Memanggil fungsi updateCartDisplay untuk pembaruan awal
//refreshLocalCart();

document.addEventListener("DOMContentLoaded", function () {
  // Memuat keranjang dari localStorage saat halaman dimuat
  loadCartFromLocalStorage();

  // Mendapatkan nilai total dari localStorage
  const totalFromLocalStorage = localStorage.getItem("total");

  // Menetapkan nilai total harga ke dalam input dengan ID 'form-total'
  document.getElementById("form-total").value = totalFromLocalStorage;
});

/// alert page order-form
// Mendapatkan elemen gambar
var img = document.querySelector(".order-button");

// Menambahkan event listener
img.addEventListener("click", function () {
  // Menampilkan pesan alert
  alert("Your order succeeds! Food will be delivered immediately");

  // Mengarahkan ke home page setelah tombol "OK" diklik
  window.location.href = "index.html";
});
