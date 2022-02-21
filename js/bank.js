// headle deposit button event by

//first get button
document.getElementById('deposit-button').addEventListener('click', function () {

    //get  the amount deposited-------------------------------------
    // get input field------- 
    const depositInput = document.getElementById('deposit-input');
    //get input value---------
    const newDeposittext = depositInput.value;
    const newDepositAmmount = parseFloat(newDeposittext);
    // console.log(depositAmmount);

    // update Deposit total----------------------------------------------
    // whice position value show
    const depositTatal = document.getElementById('deposit-total');
    // old amount
    const previousDepositText = depositTatal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    //for sum
    const newDepositTotal = previousDepositAmount + newDepositAmmount;

    // value set
    depositTatal.innerText = newDepositTotal;

    //update account blance------------------------------------------------
    const balanceTatal = document.getElementById('balance-total');      //1
    const balanceTotalText = balanceTatal.innerText;                //2
    const previousBalanceTotal = parseFloat(balanceTotalText);          //3
    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;   //4
    balanceTatal.innerText = newBalanceTotal;                           //05 get 2


    //clear the deposit input field
    depositInput.value = '';

})

//handle withdro event hendlear
document.getElementById('withdraw-button').addEventListener('click', function () {
    // /input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText);

    //set withdraw
    const withdraTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdraTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText)

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdraTotal.innerText = newWithdrawTotal;

    // update balance 

    console.log(withdrawAmountText)
    const balanceTatal = document.getElementById('balance-total');
    const previousBalanceText = balanceTatal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTatal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';


})
