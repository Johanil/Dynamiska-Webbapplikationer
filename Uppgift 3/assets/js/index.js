import displayStryktipsData from "./display_results.js";
import fetchStryktipsData from "./fetch_stryktipset.js"

function init(){
    displayStryktipsData()
}
window.addEventListener('load', init)