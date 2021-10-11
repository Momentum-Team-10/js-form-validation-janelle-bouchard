let form = document.getElementById("login-form")
let emailInput = document.getElementById("email")

console.log(form)
console.log(emailInput)

form.addEventListener('submit', (event) => {
    // sometimes you'll see e instead of event  
    // form validation functions will live here:
    event.preventDefault()
    // console.log('event object', event)
    // console.log('Form submitted!')
    validateEmail(emailInput)
})

function validateEmail(input) {
    // console.log(input)
    if (input.value.includes('@')) {
    // do something to show the user entered the correct info
    input.classList.add('valid')
} else{
    // do something to show the user entered incorrect info
    input.classList.add('invalid')
}
    // console.log(input)
}