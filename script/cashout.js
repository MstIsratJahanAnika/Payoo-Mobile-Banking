// re-implementation
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // 1. get agent number and validate
    const agentNumber = getValueFromInput('agent-number');
    if(agentNumber.length !== 11){
        alert('Invalid Agent Number');
        return;
    }

    // 2. get amount, validate, convert to Number
    const cashoutAmountInput = getValueFromInput('amount');

    // 3. get currentBalance, validate, convert to Number
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText //input field na pre-assigned value
    // console.log(balance);  //original balance

    // 4. calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmountInput);  //.value, string a thake number a convert korte hobe, constructor
    if(newBalance < 0){
        alert('Invalid Amount');
        return;
    }

    // 5. get the pin and verify
    // cashoutPinInput = document.getElementById('pin-number');
    // const pin = cashoutPinInput.value;
    // if(pin === '1234'){
    //     // 5.1 true::> give alert -> add current to remaining balance
    //     alert('Cashout successful');
    //     console.log("new balance", newBalance);
    //     balanceElement.innerText = newBalance;
    // }
    // else{
    //     alert('Invalid Pin');
    //     return;
    // }


    const pinNumber = document.getElementById('pin-number');
    const pin = pinNumber.value;
    if(pin === '1234'){
        alert('Cash out Successful');
        console.log('new balance', newBalance);
        balanceElement.innerText = newBalance;
    }
    else{
        alert('Invalid Pin');
    }
});






















/**
 * steps:
 * 1. get agent number and validate
 * 2. get amount, validate, convert to Number
 * 3. get currentBalance, validate, convert to Number
 * 4. calculate new balance
 * 5. get the pin and verify
 * 5.1 true::> give alert -> add current to remaining balance
 * 5.2 false::> give alert -> return
 */

// document.getElementById('withdraw-btn').addEventListener('click', function(){

//     // 1. get agent number and validate
//     const agentNumberInput = document.getElementById('agent-number');
//     const agentNumber = agentNumberInput.value;
//     console.log(agentNumber);
//     if(agentNumber.length !== 11){
//         alert('Invalid Agent Number');
//         return;
//     }

//     // 2. get amount, validate, convert to Number
//     const cashoutNumberInput = document.getElementById('amount');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     // 3. get currentBalance, validate, convert to Number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText //input field na pre-assigned value
//     // console.log(balance);  //original balance

//     // 4. calculate new balance
//     const newBalance = Number(balance) - Number(cashoutNumber);  //.value, string a thake number a convert korte hobe, constructor
//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }

//     // 5. get the pin and verify
//     cashoutPinInput = document.getElementById('pin-number');
//     const pin = cashoutPinInput.value;
//     if(pin === '1234'){
//         // 5.1 true::> give alert -> add current to remaining balance
//         alert('Cashout successful');
//         console.log("new balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         alert('Invalid Pin');
//         return;
//     }
    


// });