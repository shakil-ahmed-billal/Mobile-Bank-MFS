document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = inputId('add-money');
    const addPin = inputId('add-money-pin');
    const acBalance = balance('account-blc')

    if(addPin === 1234){
        const addBalance = acBalance + addMoney;
        document.getElementById('account-blc').innerText = addBalance;
    }
    
})

// cash out section.......

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const acBalance = balance('account-blc')
    const inputCash = inputId('cash-out');
    const cashPin = inputId('cash-out-pin');
    
    if(cashPin === 1234){
        const newBalance = acBalance - inputCash;
        document.getElementById('account-blc').innerText= newBalance;
    }

})