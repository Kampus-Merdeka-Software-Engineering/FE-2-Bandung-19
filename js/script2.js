// Mengambil data cart dari local storage
const storedKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
const cart = storedKeranjang;

console.log(storedKeranjang);

// Fungsi untuk memuat keranjang dari localStorage
function loadCartFromLocalStorage() {
  const storedKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
  cart.push(...storedKeranjang);
}

document.addEventListener("DOMContentLoaded", function () {
  // Memuat keranjang dari localStorage saat halaman dimuat
  loadCartFromLocalStorage();

  // Mendapatkan nilai total dari localStorage
  const totalFromLocalStorage = localStorage.getItem("total");
  console.log(totalFromLocalStorage);

  // Menetapkan nilai total harga ke dalam input dengan ID 'form-total'
  document.getElementById("form-total").value =
    totalFromLocalStorage.toLocaleString("id-ID");
});

// alert page order-form
// Mendapatkan elemen gambar
var img = document.querySelector(".order-button");

// Menambahkan event listener
img.addEventListener("click", function () {
  // Memuat keranjang dari localStorage saat halaman dimuat
  loadCartFromLocalStorage();
  // Menampilkan pesan alert
  alert("Your order succeeds! Food will be delivered immediately");

  // Menghapus data pada localStorage
  localStorage.clear();

  // Mengarahkan halaman ke index.html
  window.location.href = "index.html";
});
