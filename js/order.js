const API_URL = "https://be-2-bandung-19-production.up.railway.app/order"

const fetchALLorder = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        const order = await response.json();
        console.log(order);
    } catch (error) {
        console.error("Error:", error)
    }
}


const formInput = document.getElementById("form-order");
formInput.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(formInput);
    const formProps = Object.fromEntries(formData);

    // console.log(formProps);

    try {
        const response = await fetch("https://be-2-bandung-19-production.up.railway.app/order", {
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