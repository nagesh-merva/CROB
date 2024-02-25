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


// let sections = document.querySelectorAll('section');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY
//         let offset = sec.offsetTop - 150
//         let height = sec.offsetHeight
//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate');
//         }
//         else {
//             sec.classList.remove('show-animate');
//         }
//     })
// }