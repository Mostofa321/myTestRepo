document.getElementById('btn-calculate').addEventListener('click', function(){
        // geting incom
const income = inputValues ('income', true);
        //geting food cost
const foodCost = inputValues ('food', true);
        //geting rent cost 
const rentCost = inputValues ('rent', true);
        //geting clothes cost
const clothesCost = inputValues('clothes', true);
        //geting total Expenses and setting the value 
const totalExpenses = foodCost + rentCost + clothesCost;
document.getElementById('total-expenses').innerText = totalExpenses;
        //geting Balance
const balance = income - totalExpenses;
document.getElementById('balance').innerText = balance;
});
