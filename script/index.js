document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const pin = document.getElementById('login-pin').value;
    if(pin === '1234'){
        window.location.href = './home.html'
    }
})