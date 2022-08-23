function getInputFieldValueById(elementId){
const inputField = document.getElementById(elementId);
const inputFieldValueString = inputField.value;
const inputFieldValue = parseFloat(inputFieldValueString);
return inputFieldValue;
}


function getTextElementValueById(elementId){
const textElement = document.getElementById(elementId);
const textElementValueString = textElement.innerText;
const textElementValue = parseFloat(textElementValueString);
return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');

    const playerTotalCost = getTextElementValueById('player-expenses');

    const totalAdminCost = managerCost + coachCost;

    setTextElementValueById('total',totalAdminCost);
    const totalTeamCost = totalAdminCost + playerTotalCost ;
    setTextElementValueById('total' , totalTeamCost);
})