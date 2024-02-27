import { details } from "./products.js";

const productContainer = document.getElementById("product-cards");
let collection = "PXC"
if (!productContainer) {
    console.error("Product container not found")
} else {
    console.log("Product container found:", productContainer)

    document.addEventListener("DOMContentLoaded", function () {
        generateProductCards(collection)
    });
}


function generateProductCards(collectionName) {

    const products = details.find(product => product[collectionName]);

    if (!products) {
        console.error(`Collection '${collectionName}' not found`);
        return;
    }

    products[collectionName].forEach(product => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "relative group bg-zinc-800/80 rounded-lg flex justify-center items-center flex-col p-4 transform transition-transform duration-500 ease-in-out hover:-translate-y-5 hover:bg-blue-500 ";

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
        button.className = "font-sans p-2 rounded-lg hidden text-slate-100 group-hover:block text-sm font-black bg-gradient-to-r from-teal-500 to-indigo-800 ";
        button.textContent = "CHECK Out";

        button.addEventListener('click', function () {
            handleCheckOut(product.id);
        });

        cardDiv.appendChild(img);
        cardDiv.appendChild(h3);
        cardDiv.appendChild(h6);
        cardDiv.appendChild(h2);
        cardDiv.appendChild(button);

        productContainer.appendChild(cardDiv);
    });
}

function handleCheckOut(productId) {
    localStorage.setItem('selectedProductId', productId);
    localStorage.setItem('Fromcollection', collection)
    window.location.href = "./product.html"
}


document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let next1 = document.getElementById('next1');
    let prev1 = document.getElementById('prev1');

    let active = 0;
    let intervalId;

    function loadShow() {
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for (var i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (var i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }

    function startSlider() {
        intervalId = setInterval(function () {
            loadShow();
            active = (active + 1) % items.length;
        }, 5000);
    }

    function stopSlider() {
        clearInterval(intervalId);
    }

    loadShow();
    startSlider();

    next.onclick = function () {
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
        stopSlider();
    };

    prev.onclick = function () {
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
        stopSlider();
    };
    next1.onclick = function () {
        active = active + 1 < items.length ? active + 1 : 0;
        loadShow();
        stopSlider();
    };

    prev1.onclick = function () {
        active = active - 1 >= 0 ? active - 1 : items.length - 1;
        loadShow();
        stopSlider();
    };


});


function showContent(element) {
    const headings = element.querySelectorAll('h3, h6, h2');
    headings.forEach(heading => heading.style.display = 'block');
}

function hideContent(element) {
    const headings = element.querySelectorAll('h3, h6, h2');
    headings.forEach(heading => heading.style.display = 'none');
}

