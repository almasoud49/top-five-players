const playerArray = [];

function display(playerNumber){
const tableBody = document.getElementById('players-name');
tableBody.innerHTML = '';
for(i = 0; i<=4; i++){
    
    const name = playerArray[i].playerName;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name}</td>

    `;
    tableBody.appendChild(tr);
}
if(playerNumber.length > 5){
    alert('Access denied!')
}
}

function addToPlayers(element){
const playersName = element.parentNode.parentNode.children[0].innerText;

element.disabled = true;

const players = {
    playerName : playersName,
}

playerArray.push(players);

display(playerArray);
}