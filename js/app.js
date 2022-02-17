// getting values and returns 
function getValues(inputName){
    const inputText = document.getElementById(inputName);
    return inputAmount = parseFloat(inputText.value);
}
function add(idOne, idTwo, constOne, constTwo){
    const totalExpensesText = document.getElementById(idOne);
    const afterBalanceText= document.getElementById(idTwo);
    // values 
    totalExpensesText.innerText = constTwo;
    afterBalanceText.innerText = constOne-constTwo;
}
document.getElementById("calculate-btn").addEventListener("click", function(){
    // income amount select are here
    const incomeAmount = getValues("income-input");
    if(incomeAmount<0){
        alert("Input value is negetive please input positive number")
    }else if(isNaN(incomeAmount)){
        alert("Input any number ");
    }else{
        // all cost section are here
        const foodAmount = getValues("food-input");
        const rentAmount = getValues("rent-input");
        const clothesAmount = getValues("clothes-input");
        // total cost calculation are here
        if(foodAmount<0 && rentAmount<0 && clothesAmount<0){
            alert("all field are negetive, and negetive value are not allow")
        }else if(foodAmount<0 || rentAmount>0 || clothesAmount>0){
            alert("food negetive input are not allow")
        }else if(foodAmount>0 || rentAmount<0 || clothesAmount>0){
            alert("rent negetive input are not allow")
        }else if(foodAmount>0 || rentAmount>0 || clothesAmount<0){
            alert("clothes negetive input are not allow")
        }else{
            const sumCostAmount = foodAmount+rentAmount+clothesAmount;
            add("total-expenses", "after-balance", incomeAmount,sumCostAmount);
        }
    }
});

document.getElementById("save-btn").addEventListener("click", function(){
    const incomeAmount = getValues("income-input");
    const parcentAmount = getValues("parcent");
    if(parcentAmount<0){
        alert("Input any positive number for in saving percent");
    }else if(isNaN(parcentAmount)){
        alert("please any number");
    }else{
        // find text value
        const afterBalText = document.getElementById("after-balance");
        const afterBalAmount = parseFloat(afterBalText.innerText);
        // set values in 
        const saveparcent = incomeAmount*(parcentAmount/100);
        add("saving-amount", "remaining-balance", afterBalAmount, saveparcent);
    }
});