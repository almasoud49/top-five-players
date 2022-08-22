const playersArray = [];

function displayPlayerName(playerNumber){


const tableBody = document.getElementById('players-name');

tableBody.innerHTML = '';
for(let i = 0 ; i< playerNumber.length; i++){
    // const name = playersArray[i].playersName
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${playersArray[i].playersName}</td>
    `;
    tableBody.appendChild(tr);
}
}

function addToPlayers(players){
    const playersName= players.parentNode.parentNode.children[0].innerText ;
    

    const player ={
        playerName:playersName,
        
    }

    playersArray.push(player);

    // document.getElementById('selected-players').innerText = playersArray.length;
    displayPlayerName(playersArray);
    
}