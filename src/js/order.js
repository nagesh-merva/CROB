import { details } from "./products.js"

const clickedProduct = localStorage.getItem("selectedProductId")
const clickedcollc = document.getElementById("collc")
const linktag = document.getElementById("link-table")
const Nametag = document.getElementById("P-name")
const Imgtag = document.getElementById("P-img")
const Collctag = document.getElementById("P-collc")
const Pricetag = document.getElementById("P-price")

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