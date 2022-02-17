// getting values and returns 
function getValues(inputNames){
    const inputText = document.getElementById(inputNames);
    return inputAmount = parseFloat(inputText.value);
}
function setInnerText(totalAmount, balance, amountOne, amountTwo){
    const calculateText = document.getElementById(totalAmount);
    const totalSubtraction= document.getElementById(balance);
    // values 
    calculateText.innerText = amountTwo;
    totalSubtraction.innerText = amountOne-amountTwo;
}
function errorMessage(messages){
    const errorMsg = document.getElementById("error-message");
    errorMsg.innerText= messages;
    errorMsg.style.display = "inline-block";
    setInterval(function(){
        errorMsg.style.display= "none";
    },5000);
}
document.getElementById("calculate-btn").addEventListener("click", function(){
    // income amount select are here
    const incomeAmount = getValues("income-input");
    if(incomeAmount<0){
        errorMessage("Your income amount are negetive value");
    }else if(isNaN(incomeAmount)){
        errorMessage("Input number only");
    }else{
        // all cost section are here
        const foodAmount = getValues("food-input");
        const rentAmount = getValues("rent-input");
        const clothesAmount = getValues("clothes-input");
        // total cost calculation are here
        if(foodAmount<0 && rentAmount<0 && clothesAmount<0){
            errorMessage("all field are negetive, and negetive value are not allow")
        }else if(foodAmount<0 && rentAmount<0 && clothesAmount>0){
            errorMessage("food and rent negetive input are not allow");
        }else if(foodAmount<0 && rentAmount>0 && clothesAmount>0){
            errorMessage("food negetive input are not allow");
        }else if(foodAmount>0 && rentAmount<0 && clothesAmount>0){
            errorMessage("rent negetive input are not allow");
        }else if(foodAmount>0 && rentAmount<0 && clothesAmount<0){
            errorMessage("rent and clothes negetive input are not allow");
        }else if(foodAmount<0 && rentAmount>0 && clothesAmount<0){
            errorMessage("food and clothes negetive input are not allow");
        }else if(foodAmount>0 && rentAmount>0 && clothesAmount<0){
            errorMessage("clothes negetive input are not allow");
        }else if(isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)){
            errorMessage("Your atleast field is empty, You can not set empty value");
        }else{
            const sumCostAmount = foodAmount+rentAmount+clothesAmount;
            if(sumCostAmount>incomeAmount){
                errorMessage("OMG! Your expense amount is too high more then your income");
            }else{
            setInnerText("total-expenses", "after-balance", incomeAmount, sumCostAmount);}
        }
    }
});

document.getElementById("save-btn").addEventListener("click", function(){
    const incomeAmount = getValues("income-input");
    const parcentAmount = getValues("parcent");
    if(parcentAmount<0){
        errorMessage("Input any positive number for in saving percent");
    }else if(isNaN(parcentAmount)){
        errorMessage("please input how much you want to save and only take positive number under 100");
    }else{
        // find text value
        const afterBalText = document.getElementById("after-balance");
        const afterBalAmount = parseFloat(afterBalText.innerText);
        // set values in 
        const saveParcent = incomeAmount*(parcentAmount/100);
        if(saveParcent>afterBalAmount){
            errorMessage("Your save amount is more then you have, sorry you can not save more then you have");
        }else if(saveParcent<0){
            errorMessage("Your income input is negetive");
        } else{
            setInnerText("saving-amount", "remaining-balance", afterBalAmount, saveParcent);
        }
    }
});