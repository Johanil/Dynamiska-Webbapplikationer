import fetchStryktipsData from "./fetch_stryktipset.js";

export default async function displayStryktipsData(){
    const data = await fetchStryktipsData();
    addGames(data);
    console.log(data.matches);
}


async function addGames(data){
    let table = document.querySelector('tbody')
    data.matches.forEach(game => {
        table.appendChild(createRow(game.gameNumber,game.gameInfo.outcome,game.opponents.one,game.opponents.two))
    });
}
function createRow(gamenumber, outcome, teamone, teamtwo){
    let tr = document.createElement("tr")
    let tdGameNumber = document.createElement("td")
    let tdTeams = document.createElement("td");
    tdTeams.innerHTML = teamone.name +" -VS- "+ teamtwo.name;
    tdGameNumber.innerHTML = gamenumber;
    tr.appendChild(tdGameNumber);
    tr.appendChild(tdTeams);
    console.log(gamenumber);

    tr.appendChild(createOutcome(outcome));
    return tr;
    
}
function createOutcome(outcome){
    let td = document.createElement("td");
    let div = document.createElement("div");
    div.classList.add("stem");
    if(outcome == "1")
    {
        td.appendChild(div);
    }
    else if(outcome == "X"){
        
    }
    else if(outcome == "X"){
        
    }
    return td;
}


function addGameToTable(){
    const p = document.createElement('td');
    p.innerText = 'GF';
    document.querySelector('tbody').appendChild(p);
}