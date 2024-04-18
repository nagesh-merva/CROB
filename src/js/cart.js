

const displaycontainer = document.getElementById("maindiv")
let displaycartItems = JSON.parse(localStorage.getItem('mycart')) || []

async function fetchOrderStatuses(orderIds) {
    try {
        const response = await fetch('https://cro-b-backend.vercel.app/api/get_order_statuses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order_ids: orderIds }),
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json()
            return data.order_statuses
        } else {
            console.error('Failed to fetch order statuses')
            return []
        }
    } catch (error) {
        console.error('Error fetching order statuses:', error)
        return []
    }
}

async function renderOrders() {
    console.log(displaycartItems)
    const orderIds = displaycartItems.map(order => order.id)
    console.log(orderIds)
    const orderStatuses = await fetchOrderStatuses(orderIds)
    displaycartItems.forEach((order, index) => {
        const orderDiv = document.createElement('div')
        orderDiv.classList.add('grid', 'grid-cols-2', 'gap-4', 'md:gap-16', 'bg-gray-700/50', 'p-4', 'rounded-lg', 'mt-2', 'overflow-x-hidden')

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
        price.innerHTML = `price > ₹${order.productPrice}`

        const status = document.createElement('p')
        status.classList.add('text-gray-100', 'font-bold')
        status.innerHTML = `Status > ${getStatusText(orderStatuses.find(status => status.id === order.id))}`

        const payForm = document.createElement('form')
        const razorpayScript = document.createElement('script')
        razorpayScript.src = 'https://checkout.razorpay.com/v1/payment-button.js'
        if (order.productPrice === '179') {
            razorpayScript.setAttribute('data-payment_button_id', 'pl_NzmWFXbKsvILpL')
        } else {
            razorpayScript.setAttribute('data-payment_button_id', 'pl_NzmZpQ9LCEbTE7')
        }
        razorpayScript.async = true

        payForm.appendChild(razorpayScript)
        textDiv.appendChild(name)
        textDiv.appendChild(collc)
        textDiv.appendChild(price)
        textDiv.appendChild(status)
        textDiv.appendChild(payForm)
        detailsDiv.appendChild(textDiv)

        orderDiv.appendChild(imgDiv);
        orderDiv.appendChild(detailsDiv)

        displaycontainer.appendChild(orderDiv)
    })
}

function getStatusText(statusInfo) {
    if (!statusInfo) {
        return 'Status unknown'
    }

    switch (statusInfo.status) {
        case 'not_found':
            return 'Order Placed'
        case 'processing':
            return 'Order is being processed'
        case 'dispatched':
            return 'Order has been dispatched'
        case 'fulfilled':
            return 'Order has been fulfilled'
        default:
            return `ERROR occurred: ${statusInfo.status}`
    }
}

function calculateTotalPrice() {
    let totalPrice = 0

    displaycartItems.forEach((order) => {
        const price = parseFloat(order.productPrice.replace(/[^\d.]/g, ''))

        totalPrice += price
    });

    const totalTag = document.getElementById('total')
    if (totalTag) {
        totalTag.textContent += ` ₹${totalPrice.toFixed(2)}`
    } else {
        console.error('Total tag with id "total" not found')
    }
}


document.addEventListener("DOMContentLoaded", function () {
    renderOrders()
    calculateTotalPrice()
});

function emptyCart() {
    displaycartItems = []
    localStorage.setItem('mycart', JSON.stringify(displaycartItems))
    displaycontainer.innerHTML = ""
    console.log("Cart is now empty")
}

