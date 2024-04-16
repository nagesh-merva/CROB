document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form')

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form)

        sendEmail(formData);
        alert('Form submitted successfully!')
    });

    function sendEmail(formData) {
        fetch('https://cro-b-backend.vercel.app/call', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Email sent successfully:', data)
            })
            .catch(error => {
                console.error('Error sending email:', error)
            })
    }
})