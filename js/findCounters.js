function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function findCounter() {
    let selected1 = document.getElementById('typeForCounter1').value.toLowerCase();
    let selected2 = document.getElementById('typeForCounter2').value.toLowerCase();
    var counters = new Set();
    var counters2x = new Set();
    var resultString = "<div>Counters for ";

    if ( selected1 != "none" ){
        for ( i in weakTo[selected1] ){
            counters.add(capitalize(weakTo[selected1][i]));
        };
        resultString = resultString + `${capitalize(selected1)} `
    };
    if ( selected2 != "none" && selected1 != selected2){
        for ( i in weakTo[selected2] ){
            if ( counters.has(capitalize(weakTo[selected2][i])) ){
                counters2x.add(capitalize(weakTo[selected2][i]))
            }
            else {
                counters.add(capitalize(weakTo[selected2][i]))
            };
        };
        if ( selected1 === "none" ){
            resultString = resultString + `${capitalize(selected2)} `
        }
        else {
            resultString = resultString + `and ${capitalize(selected2)} `;
        }
    };
    resultString = resultString + ":</div><div>";
    resultString = resultString + `${Array.from(counters).join(", ")}`;
    resultString = resultString + "</div>";
    if ( counters2x.size != 0 ){
        resultString = resultString + `<div id="double"><h2>Double weak to : ${Array.from(counters2x).join(", ")}</h2></div>`;
    }
    var divResults = document.getElementById('results');
    divResults.innerHTML = resultString
    divResults.style.display = "block"
}

var divResults = document.getElementById('results');
divResults.style.display = "none";

var weakTo = {
    'bug': ['fire', 'flying', 'rock'],
    'dark': ['bug', 'fairy', 'fighting'],
    'dragon': ['dragon', 'fairy', 'ice'],
    'electric': ['ground'],
    'fairy': ['poison', 'steel'],
    'fighting': ['fairy', 'flying', 'psychic'],
    'fire':['ground', 'rock', 'water'],
    'flying': ['electric', 'ice', 'rock'],
    'ghost':['dark', 'ghost'],
    'grass': ['bug', 'fire', 'flying', 'ice', 'poison'],
    'ground': ['grass', 'ice', 'water'],
    'ice': ['fighting', 'fire', 'rock', 'steel'],
    'normal': ['fighting'],
    'poison': ['ground', 'psychic'],
    'psychic': ['bug', 'dark', 'ghost'],
    'rock': ['fighting', 'grass', 'ground', 'steel', 'water'],
    'steel': ['fighting', 'fire', 'ground'],
    'water': ['electric', 'grass']
};

var typeSelect1 = document.getElementById('typeForCounter1');
var typeSelect2 = document.getElementById('typeForCounter2');
for ( type in weakTo ){
    var opt1 = document.createElement('option');
    opt1.value = type;
    opt1.innerHTML = capitalize(type);
    var opt2 = document.createElement('option');
    opt2.value = type;
    opt2.innerHTML = capitalize(type);
    typeSelect1.appendChild(opt1);
    typeSelect2.appendChild(opt2)
};