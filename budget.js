document.getElementById('btn-calculate').addEventListener('click', function(){
const playerCostField = document.getElementById('per-player-cost');
const playerCostAmount = playerCostField.value;

const playerExpenses = document.getElementById('player-expenses');
const playerTotalExpenses = playerExpenses.innerText;
playerExpenses.innerText = playerCostAmount * 5;

})




