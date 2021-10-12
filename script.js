// console.log('Add validation!')

let form = document.getElementById("parking-form")
let nameLabel = document.getElementById('name-label')
let nameInput = document.getElementById('name')
let carDetailsLabel = document.getElementById('car-details-label')
let carYearInput = document.getElementById('car-year')
let carMakeInput = document.getElementById('car-make')
let carModelInput = document.getElementById('car-model')
let startDateInput = document.getElementById('start-date')
let startDateLabel = document.getElementById('start-date-label')
let numDaysInput = document.getElementById('days')
let numDaysLabel = document.getElementById('days-label')
let cardNumInput = document.getElementById('credit-card')
let cardNumLabel = document.getElementById('credit-card-label')
let cvvInput = document.getElementById('cvv')
let cvvLabel = document.getElementById('cvv-label')
let expDateInput = document.getElementById('expiration')
let expDateLabel = document.getElementById('expiration-label')
let submit = document.getElementById('submit-button')
let total = document.getElementById('total')
let errorElement = document.createElement('p')

// let inputFields = document.querySelectorAll(".input-field")

form.addEventListener ("submit", (event) => {
    event.preventDefault()
    validateName(nameInput)
    // validateCarDetails(carYearInput, carMakeInput, carModelInput)
    // validateCarYear(carYearInput)
    // validateCarMake(carMakeInput)
    // validateCarModel(carModelInput)
    validateStartDate(startDateInput)
    validateDays(numDaysInput)
    validateCardNum(cardNumInput)
    validateCardCVV(cvvInput)
    validateCardExpDate(expDateInput)
    // total.innerText = "$" + (days.value *= 5)
})

// Name field must contain text
function validateName (input) {
    let errorElement = document.createElement('p')
    errorElement.id = "name-error"
    // console.log(input.value)
    if (input.value === "") {
        if (document.getElementById('name-error')) {
            document.getElementById('name-error').remove()
        }
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

// // All car fields must be valid
// // function validateCarDetails(yearInput, makeInput, modelInput) {
// //         if (validateCarYear || validateCarMake || validateCarModel) {
// //             carDetailsLabel.classList.remove('input-valid')
// //             carDetailsLabel.classList.add('input-invalid')
// //         } else { 
// //             carDetailsLabel.classList.remove('input-invalid')
// //             carDetailsLabel.classList.add('input-valid')
// //     } 
// // }


// // currentYear > carYearInput (4 digit number) > 1990
// function validateCarYear (input) {
//     let errorElement = document.createElement('p')
//     errorElement.id = "car-year-error"
//     console.log(input.value)
//         if (input.value === "") {        
                // if (document.getElementById('car-year-error')) {
                //         document.getElementById('car-year-error').remove()
                // }
//             errorElement.innerText = 'Car year is required!'
//             document.getElementById('car-field').appendChild(errorElement)
//             carYearInput.classList.remove('input-valid')
//             // carDetailsLabel.classList.remove('input-valid')
//             carYearInput.classList.add('input-invalid')
//             // carDetailsLabel.classList.add('input-invalid')
//         } else { 
//             document.getElementById('car-model-error').remove()
//             carYearInput.classList.remove('input-invalid')
//             // carDetailsLabel.classList.remove('input-invalid')
//             carYearInput.classList.add('input-valid')
//             // carDetailsLabel.classList.add('input-valid')
//     } 
// }

// function validateCarMake (input) {
//     let errorElement = document.createElement('p')
//     errorElement.id = "car-make-error"
//     console.log(input.value)
//         if (input.value === "") {
            // if (document.getElementById('car-make-error')) {
            //         document.getElementById('car-make-error').remove()
            // }
            // errorElement.innerText = 'Car make is required!'
//             document.getElementById('car-field').appendChild(errorElement)
//             carMakeInput.classList.remove('input-valid')
//             // carDetailsLabel.classList.remove('input-valid')
//             carMakeInput.classList.add('input-invalid')
//             // carDetailsLabel.classList.add('input-invalid')
//         } else { 
//             document.getElementById('car-make-error').remove()
//             carMakeInput.classList.remove('input-invalid')
//             // carDetailsLabel.classList.remove('input-invalid')
//             carMakeInput.classList.add('input-valid')
//             // carDetailsLabel.classList.add('input-valid')
//     } 
// }

// function validateCarModel (input) {
//     let errorElement = document.createElement('p')
//     errorElement.id = "car-model-error"
//     console.log(input.value)
//         if (input.value === "") {
            // if (document.getElementById('car-model-error')) {
            //         document.getElementById('car-model-error').remove()
            // }   
//             errorElement.innerText = 'Car model is required!'
//             document.getElementById('car-field').appendChild(errorElement)
//             carModelInput.classList.remove('input-valid')
//             // carDetailsLabel.classList.remove('input-valid')
//             carModelInput.classList.add('input-invalid')
//             // carDetailsLabel.classList.add('input-invalid')
//         } else { 
//             document.getElementById('car-model-error').remove()
//             carModelInput.classList.remove('input-invalid')
//             // carDetailsLabel.classList.remove('input-invalid')
//             carModelInput.classList.add('input-valid')
//             // carDetailsLabel.classList.add('input-valid')
//     } 
// }

function validateStartDate (input) {
    let errorElement = document.createElement('p')
    errorElement.id = "start-date-error"
    console.log(input.value)
        if (input.value === "") {
            errorElement.innerText = 'Start date is required!'
            document.getElementById('start-date-field').appendChild(errorElement)
            startDateInput.classList.remove('input-valid')
            startDateLabel.classList.remove('input-valid')
            startDateInput.classList.add('input-invalid')
            startDateLabel.classList.add('input-invalid')
        } else { 
            document.getElementById('start-date-error').remove()
            startDateInput.classList.remove('input-invalid')
            startDateLabel.classList.remove('input-invalid')
            startDateInput.classList.add('input-valid')
            startDateLabel.classList.add('input-valid')
    } 
}

// function validateDays(input)
    // 30 > numDaysInput > 1
    function validateDays (input) {
        let errorElement = document.createElement('p')
        errorElement.id = "num-days-error"
        console.log(input.value)
            if (input.value === "") {
                errorElement.innerText = 'Number of days is required!'
                document.getElementById('days-field').appendChild(errorElement)
                numDaysInput.classList.remove('input-valid')
                numDaysLabel.classList.remove('input-valid')
                numDaysInput.classList.add('input-invalid')
                numDaysLabel.classList.add('input-invalid')
            } else { 
                document.getElementById('num-days-error').remove()
                numDaysInput.classList.remove('input-invalid')
                numDaysLabel.classList.remove('input-invalid')
                numDaysInput.classList.add('input-valid')
                numDaysLabel.classList.add('input-valid')
        } 
    }
    
function validateCardNum(input) {
        let errorElement = document.createElement('p')
        errorElement.id = "card-num-error"
        console.log(input.value)
            if (input.value === "") {
                errorElement.innerText = 'Credit card number is required!'
                document.getElementById('credit-card-field').appendChild(errorElement)
                cardNumInput.classList.remove('input-valid')
                cardNumLabel.classList.remove('input-valid')
                cardNumInput.classList.add('input-invalid')
                cardNumLabel.classList.add('input-invalid')
            } else { 
                document.getElementById('card-num-error').remove()
                cardNumInput.classList.remove('input-invalid')
                cardNumLabel.classList.remove('input-invalid')
                cardNumInput.classList.add('input-valid')
                cardNumLabel.classList.add('input-valid')
        } 
    }

function validateCardCVV(input) {
        let errorElement = document.createElement('p')
        errorElement.id = "cvv-error"
        console.log(input.value)
            if (input.value === "") {
                errorElement.innerText = 'CVV is required!'
                document.getElementById('cvv-field').appendChild(errorElement)
                cvvInput.classList.remove('input-valid')
                cvvLabel.classList.remove('input-valid')
                cvvInput.classList.add('input-invalid')
                cvvLabel.classList.add('input-invalid')
            } else { 
                document.getElementById('cvv-error').remove()
                cvvInput.classList.remove('input-invalid')
                cvvLabel.classList.remove('input-invalid')
                cvvInput.classList.add('input-valid')
                cvvLabel.classList.add('input-valid')
        } 
    }

function validateCardExpDate(input) {
        let errorElement = document.createElement('p')
        errorElement.id = "exp-date-error"
        console.log(input.value)
            if (input.value === "") {
                errorElement.innerText = 'Expiration date is required!'
                document.getElementById('expiration-field').appendChild(errorElement)
                expDateInput.classList.remove('input-valid')
                expDateLabel.classList.remove('input-valid')
                expDateInput.classList.add('input-invalid')
                expDateLabel.classList.add('input-invalid')
            } else { 
                document.getElementById('exp-date-error').remove()
                expDateInput.classList.remove('input-invalid')
                expDateLabel.classList.remove('input-invalid')
                expDateInput.classList.add('input-valid')
                expDateLabel.classList.add('input-valid')
        } 
    }


