// console.log('Add validation!')

let form = document.getElementById("parking-form")
let nameInput = document.getElementById('name')
let nameLabel = document.getElementById('name-label')
let carYearInput = document.getElementById('car-year')
let carMakeInput = document.getElementById('car-make')
let carModelInput = document.getElementById('car-model')
let startDateInput = document.getElementById('start-date')
let numDaysInput = document.getElementById('days')
let cardNumInput = document.getElementById('credit-card')
let cvvInput = document.getElementById('cvv')
let expDateInput = document.getElementById('expiration')
let submit = document.getElementById('submit-button')
let total = document.getElementById('total')
let errorElement = document.createElement('p')

// let inputFields = document.querySelectorAll(".input-field")


form.addEventListener ("submit", (event) => {
    event.preventDefault()
    validateName(nameInput)
    // validateYear(carYearInput)
    // validateMake(carMakeInput)
    // validateModel(carModelInput)
    // validateStartDate(startDateInput)
    // validateDays(numDaysInput)
    // validateCardNum(cardNumInput)
    // validateCardCVV(cvvInput)
    // validateCardExpDate(expDateInput)
    // total.innerText = "$" + (days.value *= 5)
})

// Name field must contain text
function validateName (input) {
    errorElement.id = "name-error"
    console.log(input.value)
    if (input.value === "") {
        errorElement.innerText = 'Name is required!'
        document.getElementById('name-field').appendChild(errorElement)
        nameInput.classList.remove('input-valid')
        nameLabel.classList.remove('input-valid')
        nameInput.classList.add('input-invalid')
        nameLabel.classList.add('input-invalid')
    } else { 
        document.getElementById('name-error').remove()
        nameInput.classList.remove('input-invalid')
        nameLabel.classList.remove('input-invalid')
        nameInput.classList.add('input-valid')
        nameLabel.classList.add('input-valid')
    } 
}
// validateYear(input)
// validateMake(input)
// validateModel(input)
// validateStartDate(input)
// validateDays(input)
// validateCardNum(input)
// validateCardCVV(input)
// validateCardExpDate(input)
// function 

