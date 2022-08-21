document.getElementById('btn-Save').addEventListener('click', function(){
        //geting saving parsent    
const savingPersent = inputValues('saving-persent', true);
        //geting one persent of income
const totalIncome = inputValues ('income', true);
console.log(totalIncome);
const onePersentOfIncome = totalIncome  / 100;
        //setting amount of saving
const savedAmount = savingPersent * onePersentOfIncome;
document.getElementById('saved-amount').innerText= savedAmount;
        //geting corrent balance befor saving  
const correntBalance = inputValues ('balance', false);
        //setting Remaining Balance after saving   
document.getElementById('remaining-balance').innerText= correntBalance - savedAmount; 
});