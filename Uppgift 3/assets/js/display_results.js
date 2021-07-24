import fetchStryktipsData from "./fetch_stryktipset.js";

export default async function displayStryktipsData(){
    const data = await fetchStryktipsData();
    addGames(data);
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
    let teamOne = createTeam(teamone);
    let teamTwo = createTeam(teamtwo);
    tr.appendChild(addTeams(teamOne,teamTwo));
    
    addOutcomes(outcome,tr);
    tr.appendChild(document.createElement("span"));
    return tr;
}
function createTeam(team){
    let fixedTeam = document.createElement("a")
    fixedTeam.innerText = team.name
    fixedTeam.setAttribute("href", team.homepage)
    return fixedTeam;
}
function addGameNumber(gamenumber){
    let td = document.createElement("td");
    td.innerHTML = gamenumber;
    return td;
}
function addTeams(teamone,teamtwo){
    let td = document.createElement("td");
    let spanOne = document.createElement("span");
    let spanVS = document.createElement("span");
    let spanTwo = document.createElement("span");
    spanOne = teamone;
    spanVS.innerText = " -VS- ";
    spanTwo = teamtwo;
    td.appendChild(spanOne);
    td.appendChild(spanVS)
    td.appendChild(spanTwo);
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
    let td = document.createElement("td")
    if (outcome == oneXTwo) {
        td.appendChild(createStemKick());
    }
    else{
       td.appendChild(createBlank());
    }
    return td;
    

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

