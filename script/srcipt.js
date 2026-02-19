console.log('javascript functionality connected');


/**
 * steps:
 * 1. mobile number and pin input fetch
 * 2. match with desired
 * 2.1. true :: > alert->homepage
 * 2.2. false :: > alert->return to login page again
 */

document.getElementById('login-btn').addEventListener('click', function(){
    // console.log("login button clicked");

    // step-1->number
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value; //input er value -> number 
    console.log(contactNumber); //success
    // step-1->pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value; //input er value -> number 
    console.log(pin); //success

    // step-3
    if(contactNumber === '01234567' && pin === '1234'){ //2.1
        alert('Successfully Logged-in');
    }
});