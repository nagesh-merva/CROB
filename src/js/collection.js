import { details } from "./products.js";

const productContainer = document.getElementById("product-cards");

if (!productContainer) {
    console.error("Product container not found");
} else {
    console.log("Product container found:", productContainer);

    document.addEventListener("DOMContentLoaded", function () {
        generateProductCards();
    });
}

function generateProductCards() {
    details.forEach(collection => {
        Object.keys(collection).forEach(collectionName => {
            collection[collectionName].forEach(product => {
                const cardDiv = document.createElement("div");
                cardDiv.className = "relative group bg-zinc-800/80 rounded-lg flex justify-center items-center flex-col p-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5 hover:bg-blue-500";

                const img = document.createElement("img");
                img.className = "md:p-2 md:h-48 md:w-32 h-32 w-24 border-2 border-white rounded-sm";
                img.src = product.img;
                img.alt = product.name;

                const h3 = document.createElement("h3");
                h3.className = "hidden font-roboto text-lg group-hover:block";
                h3.textContent = product.name;

                const h6 = document.createElement("h6");
                h6.className = "hidden font-sans text-thin text-slate-200 group-hover:block";
                h6.textContent = product.data;

                const h2 = document.createElement("h2");
                h2.className = "hidden font-roboto font-bold text-lg md:text-xl pb-5 group-hover:block";
                h2.innerHTML = `Price - &#x20b9; ${product.Price}`;

                const button = document.createElement("button");
                button.className = "font-sans p-2 rounded-lg hidden text-slate-100 group-hover:block text-sm font-black bg-gradient-to-r from-teal-500 to-indigo-800";
                button.textContent = "CHECK OUT";

                button.addEventListener('click', function () {
                    handleCheckOut(product.id, collectionName);
                });

                cardDiv.appendChild(img);
                cardDiv.appendChild(h3);
                cardDiv.appendChild(h6);
                cardDiv.appendChild(h2);
                cardDiv.appendChild(button);

                productContainer.appendChild(cardDiv);
            });
        });
    });
}

function handleCheckOut(productId, collectionName) {
    localStorage.setItem('selectedProductId', productId);
    localStorage.setItem('Fromcollection', collectionName);
    window.location.href = "./product.html";
}