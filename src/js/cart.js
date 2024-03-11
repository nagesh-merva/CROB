

const displaycontainer = document.getElementById("maindiv")
let displaycartItems = JSON.parse(localStorage.getItem('mycart')) || []

function renderOrders() {
    console.log(displaycartItems)
    displaycartItems.forEach((order, index) => {
        const orderDiv = document.createElement('div')
        orderDiv.classList.add('grid', 'grid-cols-2', 'gap-4', 'md:gap-16', 'bg-gray-700/50', 'p-4', 'rounded-lg', 'mt-2')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('flex', 'justify-center', 'p-4')

        const img = document.createElement('img')
        img.classList.add('border-2', 'border-whites', 'rounded-sm', 'h-32', 'md:h-96')
        img.src = order.productImg
        img.alt = ''

        imgDiv.appendChild(img)

        const detailsDiv = document.createElement('div')
        detailsDiv.classList.add('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-4')

        const textDiv = document.createElement('div')
        textDiv.classList.add('flex', 'flex-col', 'space-y-4')

        const name = document.createElement('h3')
        name.classList.add('text-xl', 'font-bold', 'text-gray-400')
        name.textContent = order.productName

        const collc = document.createElement('p')
        collc.classList.add('text-gray-300')
        collc.textContent = `Collection > ${order.productCollc}`

        const price = document.createElement('p')
        price.classList.add('text-gray-100', 'font-bold')
        price.innerHTML = `Price > &#x20b9;${order.productPrice}`

        textDiv.appendChild(name)
        textDiv.appendChild(collc)
        textDiv.appendChild(price)

        detailsDiv.appendChild(textDiv)

        orderDiv.appendChild(imgDiv);
        orderDiv.appendChild(detailsDiv)

        displaycontainer.appendChild(orderDiv)
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderOrders();
});

function emptyCart() {
    displaycartItems = []
    localStorage.setItem('mycart', JSON.stringify(displaycartItems))
    displaycontainer.innerHTML = ""
    console.log("Cart is now empty")
}
