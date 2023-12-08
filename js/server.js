const API_URL = "http://localhost:3000";
const appetizerId = [1];

document.addEventListener("DOMContent Loaded ", async () => {
  fetchALLorder();
  fetchALLproducts();
});

const fetchALLproducts = async () => {
  try {
    const response = await fetch(`${API_URL}/product`);
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchALLorder = async () => {
  try {
    const response = await fetch(`${API_URL}/order`);
    const order = await response.json();
    console.log(order);
  } catch (error) {
    console.error("Error:", error);
  }
};

const formInput = document.getElementById("form-order");
formInput.addEventListener("submit", async function (event) {
  event.preventDefault();
  const formData = new FormData(formInput);
  const formProps = Object.fromEntries(formData);

  // console.log(formProps);

  try {
    const response = await fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formProps),
    });
    const data = await response.json();
    console.log("Success", data);
  } catch (error) {
    console.error("Error: ", error);
  }
});

const productList = document.getElementById("form-order");
formInput.addEventListener("submit", async function (event) {
  event.preventDefault();
  const data = new listData(formInput);
  const formProps = Object.fromEntries(formData);

  // console.log(formProps);

  try {
    const response = await fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formProps),
    });
    const data = await response.json();
    console.log("Success", data);
  } catch (error) {
    console.error("Error: ", error);
  }
});

fetchALLorder();
fetchALLproducts();
