export default async function fetchStryktipsData(){
    return await fetch('https://stryk.herokuapp.com/stryktipset-sommar-2021')
    .then(response => response.json())
    .then(data => {
        return data;
    });
}
