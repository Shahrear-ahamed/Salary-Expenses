// getting values and returns 
function getValues(inputName){
    const inputText = document.getElementById(inputName);
    return inputAmount = parseFloat(inputText.value);
}
document.getElementById("calculate-btn").addEventListener("click", function(){
    // income amount select are here
    const incomeAmount = getValues("income-input");
    // all cost section are here
    const foodAmount = getValues("food-input");
    const rentAmount = getValues("rent-input");
    const clothesAmount = getValues("clothes-input");
    // balance and total expenses 
    const totalExpensesText = document.getElementById("total-expenses");
    const afterBalanceText= document.getElementById("after-balance");
    // total cost calculation are here
    const sumCostAmount = foodAmount+rentAmount+clothesAmount;
    const balance = incomeAmount-sumCostAmount;
    // values 
    totalExpensesText.innerText = sumCostAmount;
    afterBalanceText.innerText = balance;
});

document.getElementById("save-btn").addEventListener("click", function(){
    const incomeAmount = getValues("income-input");
    const parcentAmount = getValues("parcent");
    const afterBalText = document.getElementById("after-balance");
    const savingAmountText = document.getElementById("saving-amount");
    const remainingAmountText= document.getElementById("remaining-balance");
    const afterBalAmount = parseFloat(afterBalText.innerText);
    // set values in 
    const saveparcent = incomeAmount*(parcentAmount/100);
    savingAmountText.innerText = saveparcent;
    remainingAmountText.innerText = afterBalAmount-saveparcent;
});