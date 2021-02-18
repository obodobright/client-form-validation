const form = document.FormsData
const email = document.getElementById('userData')
const alertError = document.querySelector('#userData + span.error')

email.addEventListener('input', function(event) {
    if (email.validity.valid) {
        alertError.textContent = ''
        alertError.className = 'error'
    } else {
        showError()
    }
})

form.addEventListener('submit', function(event) {
    if (!email.validity.valid) {
        showError()
        event.preventDefault()
    }
})

function showError() {
    if (email.validity.valueMissing) {
        alertError.textContent = 'You need to enter an email address'
    } else if (email.validity.typeMismatch) {

        alertError.textContent = "Entered value must be a valid email address"
    } else if (email.validity.tooShort) {
        alertError.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}`
    }
    alertError.className = "error active"
}

const password = document.getElementById('password')
const errorMessage = document.querySelector('#password + span.errorMessage')

password.addEventListener('input', function() {
    if (password.validity.valid) {
        errorMessage.textContent = '';
        errorMessage.className = 'errorMessage'
    } else {
        ErrorAlert()
    }
})

form.addEventListener('submit', function(event) {
    if (!password.validity.valid) {
        ErrorAlert()
        event.preventDefault()
    }
})

function ErrorAlert() {
    if (password.validity.valueMissing) {
        errorMessage.textContent = 'Please provide password'
    } else if (password.validity.typeMismatch) {
        errorMessage.textContent = 'A password is required'
    } else if (password.tooShort) {
        errorMessage.textContent = `Password should be atleast ${password.minlength} characters; you entered ${password.value.length}`
    }
    errorMessage.className = 'errorMessage'
}
