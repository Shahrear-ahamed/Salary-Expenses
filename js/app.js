// getting values and returns 
function getValues(inputName){
    const inputText = document.getElementById(inputName);
    return inputAmount = parseFloat(inputText.value);
}
function getInnerText(findText){
    return document.getElementById(findText);
}
document.getElementById("calculate-btn").addEventListener("click", function(){
    // income amount select are here
    const incomeAmount = getValues("income-input");
    // all cost section are here
    const foodAmount = getValues("food-input");
    const rentAmount = getValues("rent-input");
    const clothesAmount = getValues("clothes-input");
    // balance and total expenses 
    const totalExpensesText = getInnerText("total-expenses");
    const afterBalanceText= getInnerText("after-balance");
    // total cost calculation are here
    const sumCostAmount = foodAmount+rentAmount+clothesAmount;
    // values 
    totalExpensesText.innerText = sumCostAmount;
    afterBalanceText.innerText = incomeAmount-sumCostAmount;
});

document.getElementById("save-btn").addEventListener("click", function(){
    const incomeAmount = getValues("income-input");
    const parcentAmount = getValues("parcent");
    // find text value
    const afterBalText = getInnerText("after-balance");
    const savingAmountText = getInnerText("saving-amount");
    const remainingAmountText= getInnerText("remaining-balance");
    const afterBalAmount = parseFloat(afterBalText.innerText);
    // set values in 
    const saveparcent = incomeAmount*(parcentAmount/100);
    
    savingAmountText.innerText = saveparcent;
    remainingAmountText.innerText = afterBalAmount-saveparcent;
});