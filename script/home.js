document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = inputId("add-money");
    const addPin = inputId("add-money-pin");
    const acBalance = balance("account-blc");

    if(isNaN(addMoney)){
        alert('Please Provide valid Amount')
        return;
    }
    if (addPin === 1234) {
      const addBalance = acBalance + addMoney;
      document.getElementById("account-blc").innerText = addBalance;

      // add transaction
      const trx = document.createElement("tr");
      trx.className = "bg-blue-400";
      trx.innerHTML = `<td class="font-bold">Add Cash</td>
                        <td>${addMoney}</td>
                        <td>${addBalance}</td>`;
      // append this element
      document.getElementById("trx-table").appendChild(trx);
    }
    else{
        alert('Please Provide Your Valid PIN')
    }
  });

// cash out section.......

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const acBalance = balance("account-blc");
    const inputCash = inputId("cash-out");
    const cashPin = inputId("cash-out-pin");

    if(isNaN(inputCash)){
        alert('Please Provide Your Valid Amount')
        return;
    }
    if (cashPin === 1234) {
      const newBalance = acBalance - inputCash;
      document.getElementById("account-blc").innerText = newBalance;

      //   add transaction
      const trx = document.createElement("tr");
      trx.className = 'bg-green-400'
      trx.innerHTML = `
                        <td class="font-bold">Cash Out</td>
                        <td>${inputCash}</td>
                        <td>${newBalance}</td>`;
        
        // append child element
        document.getElementById('trx-table').appendChild(trx)
    }
    else{
        alert('Please Provide Your Valid PIN')
    }
  });
