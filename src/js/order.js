import { details } from "./products.js"

const clickedProduct = localStorage.getItem("selectedProductId")
const clickedcollc = document.getElementById("collc")
const linktag = document.getElementById("link-table")
const Nametag = document.getElementById("P-name")
const Imgtag = document.getElementById("P-img")
const Collctag = document.getElementById("P-collc")
const Pricetag = document.getElementById("P-price")
let neworder

document.addEventListener("DOMContentLoaded", function () {
    let collectionName = localStorage.getItem('Fromcollection')

    let orderProduct = null;
    for (const collection of details) {
        if (collection[collectionName]) {
            orderProduct = collection[collectionName].find(product => product.id === clickedProduct)
            if (orderProduct) {
                break
            }
        }
    }
    if (orderProduct) {
        clickedcollc.textContent = collectionName + " > "
        linktag.textContent = orderProduct.name
        Nametag.textContent = orderProduct.name
        Imgtag.src = orderProduct.img
        Collctag.textContent = orderProduct.collection
        Pricetag.innerHTML = `Price - &#x20b9; ${orderProduct.Price}`
    } else {
        console.log("Product not found with the stored ID")
    }
})


async function saveFormData() {
    const phonenumber = document.getElementById('phone').value
    const idnumber = clickedProduct + phonenumber
    const formData = {
        id: idnumber,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: phonenumber,
        address: document.getElementById('address').value,
        productName: Nametag.textContent,
        productPrice: Pricetag.innerHTML
    };

    try {
        const response = await fetch('https://cro-b-backend.vercel.app/api/save_form_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),

        });

        if (response.ok) {
            console.log('Form data sent successfully');
            window.location.href = './cart.html'
        } else {
            console.error('Failed to send form data');
        }
    } catch (error) {
        console.error('Error sending form data:', error);
    }
    neworder = [{
        ID: idnumber,
        IMG: Imgtag.src,
        NAME: Nametag.value,
        COLLC: Collctag.value,
        PRICE: Pricetag.value
    }]
}

document.getElementById('placeorder').addEventListener("click", saveFormData)
export { neworder };