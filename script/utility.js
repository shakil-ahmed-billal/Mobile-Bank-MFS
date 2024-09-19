function inputId(id){
    const input = document.getElementById(id).value;
    const newInput = parseFloat(input);
    return newInput;
}

function balance(id){
    const acBalance = document.getElementById(id).innerText;
    const newBalance = parseFloat(acBalance);
    return newBalance;
}