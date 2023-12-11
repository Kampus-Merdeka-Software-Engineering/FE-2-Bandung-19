//API GET
const API_URL = "https://be-2-bandung-19-production.up.railway.app/products";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("main-course.html")) {
    await fetchMenu();
  }
});

const fetchMenu = async () => {
  try {
    const response = await fetch(
      `https://be-2-bandung-19-production.up.railway.app/products/2`
    );
    const menu = await response.json();
    console.log(menu);
    displayMenu(menu);
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

const displayMenu = (menu) => {
  const section = document.querySelector(".menu-main-course");
  section.innerHTML = "";

  menu.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("konten");
    // const price = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(`${product.price}`);
    div.innerHTML = `
                  <img src="${product.imageUrl}" alt="" class="food-img" />
                <h2 class="product-tittle">${product.name} </h2>
                <h4 class="product-price"> Rp.${product.price.toLocaleString(
                  "id-ID"
                )}  </h4>
                <div class="menu-button">
                    <img class="remove-order" style="float: left;" src="assets/minus-circle.svg"
                    onclick="removeFromcart('${product.name}', ${
      product.price
    })" />
                    <img class="add-order" style="float: right;" src="assets/plus-circle.svg" onclick="addToCart('${
                      product.name
                    }', ${product.price})" />
                </div>
        `;
    section.appendChild(div);
  });
};
