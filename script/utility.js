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


// feature section ......

function showBtn(id){
    document.getElementById('add-funds-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('trx-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}