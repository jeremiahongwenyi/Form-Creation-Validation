document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', function (e) {
        e.preventDefault()
    })

    const username = document.getElementById('username').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push('Username must have a minimum of 3 characters')
    }

    if (!email.includes('@')) {
        isValid = false;
        messages.push("Enter a valid email")
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must have a minimum of 8 characters")
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration successful"
        feedbackDiv.style.color = "#28a745"
    } else {
        feedbackDiv.innerHTML = messages.join("<br>")
        feedbackDiv.style.color = "#dc3545"

    }


})