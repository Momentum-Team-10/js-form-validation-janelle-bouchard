// console.log('Add validation!')

// Step 1:
    // All fields must be required
// Step 2:
    // Car year must be a number. 
        // Update the `type` of the input field
    // Car year must be after 1900.
    // Number of days must be a number.
    // Number of days must be between 1 and 30.
// Step 3:
    // CVV must be a three-digit number
        // This can use the `pattern` attribute in html, or custom validation with JavaScript.)
// Step 4:    
    // IFF the form is valid, show the total cost of their parking when they submit
        // Cost = $5/day
// Step 5:    
    // Update cost calc to $5/weekday, and $7/weekend day. 
        // Use `.map` and `.reduce` methods
        // Use [the JavaScript Date object](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/)
// Step 6:
    // Validate the format of the credit card number: 16-digit number
        // Use the provided regex/luhncheck functionality
        // Test using: 4111111111111111
// Step 7:
    // Expiration date must be a valid month and year and in the correct format.
    // Expiration date must not be in the past.
    // Car year cannot be in the future.
    // Date parking must be in the future.

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
let now = moment()

// let inputFields = document.querySelectorAll(".input-field")

form.addEventListener ("submit", (event) => {
    event.preventDefault()
    validateName(nameInput)
    validateCarDetails(errorElement)
    validateCarYear(carYearInput)
    validateCarMake(carMakeInput)
    validateCarModel(carModelInput)
    validateStartDate(startDateInput)
    validateDays(numDaysInput)
    validateCardNum(cardNumInput)
    validateCardCVV(cvvInput)
    validateCardExpDate(expDateInput)
    total.innerText = "$" + (numDaysInput.value *= 5)
})

// Name field is required
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
        if (document.getElementById('name-error')) {
            document.getElementById('name-error').remove()
        }
        nameInput.classList.remove('input-invalid')
        nameLabel.classList.remove('input-invalid')
        nameInput.classList.add('input-valid')
        nameLabel.classList.add('input-valid')
    } 
}

// // All car fields must be valid
function validateCarDetails (errorElement) {
    let carField = document.getElementById('car-field')
        if (carField.contains(errorElement)) {
        // if (carField.errorElement.id === ("car-year-error" || "car-make-error" || "car-model-error")) {
            carDetailsLabel.classList.remove('input-valid')
            carDetailsLabel.classList.add('input-invalid')
        } else { 
            carDetailsLabel.classList.remove('input-invalid')
            carDetailsLabel.classList.add('input-valid')
    }}


// Car year is required, and must be a 4 digit number between 1990 & 2022
function validateCarYear (input) {
    let errorElement = document.createElement('p')
    errorElement.id = "car-year-error"
    console.log(input.value)
        if (input.value === "") {        
            if (document.getElementById('car-year-error')) {
                document.getElementById('car-year-error').remove()
            }
            errorElement.innerText = 'Car year is required!'
            document.getElementById('car-field').appendChild(errorElement)
            carYearInput.classList.remove('input-valid')
            // carDetailsLabel.classList.remove('input-valid')
            carYearInput.classList.add('input-invalid')
            // carDetailsLabel.classList.add('input-invalid')
        } else if (input.value > 2022 || input.value < 1990) {
            if (document.getElementById('car-year-error')) {
                document.getElementById('car-year-error').remove()
            }
            errorElement.innerText = 'Please enter a valid car year!'
            document.getElementById('car-field').appendChild(errorElement)
            carYearInput.classList.remove('input-valid')
            // carDetailsLabel.classList.remove('input-valid')
            carYearInput.classList.add('input-invalid')
            // carDetailsLabel.classList.add('input-invalid')
        } else { 
            if (document.getElementById('car-year-error')) {
                document.getElementById('car-year-error').remove()
            }
            carYearInput.classList.remove('input-invalid')
            // carDetailsLabel.classList.remove('input-invalid')
            carYearInput.classList.add('input-valid')
            // carDetailsLabel.classList.add('input-valid')
    } 
}

// Car make is required
function validateCarMake (input) {
    let errorElement = document.createElement('p')
    errorElement.id = "car-make-error"
    console.log(input.value)
        if (input.value === "") {
            if (document.getElementById('car-make-error')) {
                document.getElementById('car-make-error').remove()
            }
            errorElement.innerText = 'Car make is required!'
            document.getElementById('car-field').appendChild(errorElement)
            carMakeInput.classList.remove('input-valid')
            // carDetailsLabel.classList.remove('input-valid')
            carMakeInput.classList.add('input-invalid')
            // carDetailsLabel.classList.add('input-invalid')
        } else { 
            if (document.getElementById('car-make-error')) {
                document.getElementById('car-make-error').remove()
            }
            carMakeInput.classList.remove('input-invalid')
            // carDetailsLabel.classList.remove('input-invalid')
            carMakeInput.classList.add('input-valid')
            // carDetailsLabel.classList.add('input-valid')
    } 
}

function validateCarModel (input) {
    let errorElement = document.createElement('p')
    errorElement.id = "car-model-error"
    console.log(input.value)
        if (input.value === "") {
            if (document.getElementById('car-model-error')) {
                document.getElementById('car-model-error').remove()
            }   
            errorElement.innerText = 'Car model is required!'
            document.getElementById('car-field').appendChild(errorElement)
            carModelInput.classList.remove('input-valid')
            // carDetailsLabel.classList.remove('input-valid')
            carModelInput.classList.add('input-invalid')
            // carDetailsLabel.classList.add('input-invalid')
        } else { 
            if (document.getElementById('car-model-error')) {
                document.getElementById('car-model-error').remove()
            }   
            carModelInput.classList.remove('input-invalid')
            // carDetailsLabel.classList.remove('input-invalid')
            carModelInput.classList.add('input-valid')
            // carDetailsLabel.classList.add('input-valid')
    } 
}

function validateStartDate (input) {
    let errorElement = document.createElement('p')
    errorElement.id = "start-date-error"
    console.log(input.value)
        if (input.value === "") {
            if (document.getElementById('start-date-error')) {
                document.getElementById('start-date-error').remove()
            }    
            errorElement.innerText = 'Start date is required!'
            document.getElementById('start-date-field').appendChild(errorElement)
            startDateInput.classList.remove('input-valid')
            startDateLabel.classList.remove('input-valid')
            startDateInput.classList.add('input-invalid')
            startDateLabel.classList.add('input-invalid')
        } else { 
            if (document.getElementById('start-date-error')) {
                document.getElementById('start-date-error').remove()
            }    
            startDateInput.classList.remove('input-invalid')
            startDateLabel.classList.remove('input-invalid')
            startDateInput.classList.add('input-valid')
            startDateLabel.classList.add('input-valid')
    } 
}

// Number of days is required, and must be a number between 1 and 30.
    function validateDays (input) {
        let errorElement = document.createElement('p')
        errorElement.id = "num-days-error"
        console.log(input.value)
            if (input.value === "") {
                if (document.getElementById('num-days-error')) {
                    document.getElementById('num-days-error').remove()
                }                
                errorElement.innerText = 'Number of days is required!'
                document.getElementById('days-field').appendChild(errorElement)
                numDaysInput.classList.remove('input-valid')
                numDaysLabel.classList.remove('input-valid')
                numDaysInput.classList.add('input-invalid')
                numDaysLabel.classList.add('input-invalid')
            } else if (input.value > 30 || input.value < 1) {
                if (document.getElementById('num-days-error')) {
                    document.getElementById('num-days-error').remove()
                }            
                errorElement.innerText = 'Please enter a valid number of days!'
                document.getElementById('days-field').appendChild(errorElement)
                numDaysInput.classList.remove('input-valid')
                numDaysLabel.classList.remove('input-valid')
                numDaysInput.classList.add('input-invalid')
                numDaysLabel.classList.add('input-invalid')
            } else { 
                if (document.getElementById('num-days-error')) {
                    document.getElementById('num-days-error').remove()
                }
                numDaysInput.classList.remove('input-invalid')
                numDaysLabel.classList.remove('input-invalid')
                numDaysInput.classList.add('input-valid')
                numDaysLabel.classList.add('input-valid')
            }
    }
    
    
function validateCardNum (input) {
        let errorElement = document.createElement('p')
        errorElement.id = "card-num-error"
        console.log(input.value)
            if (input.value === "") {
                if (document.getElementById('card-num-error')) {
                    document.getElementById('card-num-error').remove()
                }        
                errorElement.innerText = 'Credit card number is required!'
                document.getElementById('credit-card-field').appendChild(errorElement)
                cardNumInput.classList.remove('input-valid')
                cardNumLabel.classList.remove('input-valid')
                cardNumInput.classList.add('input-invalid')
                cardNumLabel.classList.add('input-invalid')
            // } else if {
            } else { 
                if (document.getElementById('card-num-error')) {
                    document.getElementById('card-num-error').remove()
                }  
                cardNumInput.classList.remove('input-invalid')
                cardNumLabel.classList.remove('input-invalid')
                cardNumInput.classList.add('input-valid')
                cardNumLabel.classList.add('input-valid')
        } 
    }

// CVV is required and must be a three-digit number
function validateCardCVV (input) {
        let errorElement = document.createElement('p')
        errorElement.id = "cvv-error"
        console.log(input.value)
            if (input.value === "") {
                if (document.getElementById('cvv-error')) {
                    document.getElementById('cvv-error').remove()
                }        
                errorElement.innerText = 'CVV is required!'
                document.getElementById('cvv-field').appendChild(errorElement)
                cvvInput.classList.remove('input-valid')
                cvvLabel.classList.remove('input-valid')
                cvvInput.classList.add('input-invalid')
                cvvLabel.classList.add('input-invalid')
            } else if (input.value > 999 || input.value <100) {
                if (document.getElementById('cvv-error')) {
                    document.getElementById('cvv-error').remove()
                }        
                errorElement.innerText = 'Please enter a valid 3-digit CVV!'
                document.getElementById('cvv-field').appendChild(errorElement)
                cvvInput.classList.remove('input-valid')
                cvvLabel.classList.remove('input-valid')
                cvvInput.classList.add('input-invalid')
                cvvLabel.classList.add('input-invalid')
            } else { 
                if (document.getElementById('cvv-error')) {
                    document.getElementById('cvv-error').remove()
                }   
                cvvInput.classList.remove('input-invalid')
                cvvLabel.classList.remove('input-invalid')
                cvvInput.classList.add('input-valid')
                cvvLabel.classList.add('input-valid')
        } 
    }

// Expiration date is required, must be a valid month/year and must be in the future
function validateCardExpDate (input) {
        let errorElement = document.createElement('p')
        errorElement.id = "exp-date-error"
        console.log(input.value)
            if (input.value === "") {
                if (document.getElementById('exp-date-error')) {
                    document.getElementById('exp-date-error').remove()
                }        
                errorElement.innerText = 'Expiration date is required!'
                document.getElementById('expiration-field').appendChild(errorElement)
                expDateInput.classList.remove('input-valid')
                expDateLabel.classList.remove('input-valid')
                expDateInput.classList.add('input-invalid')
                expDateLabel.classList.add('input-invalid')
            } else { 
                if (document.getElementById('exp-date-error')) {
                    document.getElementById('exp-date-error').remove()
                }
                expDateInput.classList.remove('input-invalid')
                expDateLabel.classList.remove('input-invalid')
                expDateInput.classList.add('input-valid')
                expDateLabel.classList.add('input-valid')
        } 
    }


    // function validateCardNumber(number) {
    //     let regex = new RegExp("^[0-9]{16}$");
    //     if (!regex.test(number))
    //         return false;
    
    //     return luhnCheck(number);
    // }
    
    // function luhnCheck(val) {
    //     let sum = 0;
    //     for (var i = 0; i < val.length; i++) {
    //         var intVal = parseInt(val.substr(i, 1));
    //         if (i % 2 == 0) {
    //             intVal *= 2;
    //             if (intVal > 9) {
    //                 intVal = 1 + (intVal % 10);
    //             }
    //         }
    //         sum += intVal;
    //     }
    //     return (sum % 10) == 0;
    // }