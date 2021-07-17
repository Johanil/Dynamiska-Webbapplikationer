import fetchStryktipsData from "./fetch_stryktipset.js";

export default async function displayStryktipsData(){
    const data = await fetchStryktipsData();
    addGames(data);
    console.log(data.matches);
}


async function addGames(data){
    let table = document.querySelector('tbody')
    data.matches.forEach(game => {
        table.appendChild(addRow(game.gameNumber,game.gameInfo.outcome,game.opponents.one,game.opponents.two))
    });
}
function addRow(gamenumber, outcome, teamone, teamtwo){
    let tr = document.createElement("tr")
    tr.appendChild(addGameNumber(gamenumber));
    tr.appendChild(addTeams(teamone,teamtwo));
    let td = document.createElement("td")
    addOutcomes(outcome,td);
    tr.appendChild(document.createElement("span"));
    return tr;
}
function addGameNumber(gamenumber){
    let td = document.createElement("td");
    td.innerHTML = gamenumber;
    return td;
}
function addTeams(teamone,teamtwo){
    let td = document.createElement("td");
    td.innerHTML = teamone.name +" -VS- "+ teamtwo.name;
    return td;
}
function addOutcomes(outcome, tr){
    let tdOne = addOutcome(outcome, "1")
    let tdX = addOutcome(outcome, "X")
    let tdTwo = addOutcome(outcome, "2")
    tr.appendChild(tdOne);
    tr.appendChild(tdX);
    tr.appendChild(tdTwo);
    return tr;
}
function addOutcome(outcome, oneXTwo){
    if (outcome == oneXTwo) {
        return createStemKick();

    }
    else return createBlank();

}
function createStemKick(){
    let span = document.createElement("span")
    span.classList.add("checkmark")
    let stemDiv = document.createElement("div")
    stemDiv.classList.add("stem")
    let kickDiv = document.createElement("div")
    kickDiv.classList.add("kick")
    span.appendChild(stemDiv)
    span.appendChild(kickDiv)
    return span;
}
function createBlank(){
    let span = document.createElement("span")
    return span;
}

