import { details } from "./products.js"

const clickedProduct = localStorage.getItem("selectedProductId")
const clickedcollc = document.getElementById("collc")
const linktag = document.getElementById("link-table")
const Nametag = document.getElementById("P-name")
const Imgtag = document.getElementById("P-img")
const Collctag = document.getElementById("P-collc")
const Pricetag = document.getElementById("P-price")
const alert = document.getElementById('notplacedalert')
let displaycartItems = JSON.parse(localStorage.getItem('mycart')) || []
let neworder
let retainedid = localStorage.getItem('Rid')

const allLetters = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ']

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
    console.log(displaycartItems)
    console.log(retainedid)
    document.getElementById('placeorder').addEventListener("click", async function () {
        event.preventDefault()
        const name = document.getElementById('name').value
        const phone = document.getElementById('phone').value
        const address = document.getElementById('address').value
        if (!name || !phone || !address) {
            let alert = document.getElementById("alert")
            alert.style.display = "block"
            return
        }
        saveFormData()
    })
})

async function saveFormData() {
    const phonenumber = document.getElementById('phone').value
    const randomIndex = Math.floor(Math.random() * allLetters.length)
    const addLetter = allLetters[randomIndex]
    const idnumber = clickedProduct + phonenumber + addLetter

    localStorage.setItem('Rid', idnumber)
    const formData = {
        id: idnumber,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: phonenumber,
        address: document.getElementById('address').value,
        productName: Nametag.textContent,
        productPrice: Pricetag.innerHTML,
        paymentMethod: document.querySelector('input[name="payment_method"]:checked').value,
    }
    neworder = {
        id: idnumber,
        productImg: Imgtag.src,
        productCollc: Collctag.textContent,
        productName: Nametag.textContent,
        productPrice: extractNumericPrice(Pricetag.textContent),
        paymentMethod: document.querySelector('input[name="payment_method"]:checked').value
    }
    try {
        const response = await fetch('https://cro-b-backend.vercel.app/api/save_form_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        });
        if (response.ok) {
            console.log(neworder)
            displaycartItems.push(neworder)
            localStorage.setItem('mycart', JSON.stringify(displaycartItems))
            neworder = {}
            checkcart(idnumber)
            console.log('Form data sent successfully')
        } else {
            console.error('Failed to send form data')
            alert.style.display = 'block';
        }
    } catch (error) {
        console.error('Error sending form data:', error)
        alert.style.display = 'block';
    }
}

function checkcart(ID) {
    const isIdpresent = displaycartItems.some(item => item.id === ID)

    if (!isIdpresent) {
        alert.style.display = "block"
    } else {
        window.location.href = './cart.html'
    }
}

function extractNumericPrice(priceString) {
    const numericPrice = priceString.match(/[0-9.]+/g);

    if (numericPrice && numericPrice.length > 0) {
        return numericPrice[0];
    } else {
        return ''
    }
}