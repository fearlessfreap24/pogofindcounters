function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function findCounter() {
    selected1 = document.getElementById('typeForCounter1').value.toLowerCase();
    selected2 = document.getElementById('typeForCounter2').value.toLowerCase();
    var counters = new Set();
    var counters2x = new Set();
    var resultString = "Counters for ";

    if ( selected1 != "none" ){
        for ( i in weakTo[selected1] ){
            if ( counters.has(weakTo[selected1][i]) ){
                counters2x.add(weakTo[selected1][i]);
            }
            else {
                counters.add(weakTo[selected1][i]);
            };
        };
        resultString = resultString + `${capitalize(selected1)} `
    };
    if ( selected2 != "none" ){
        for ( i in weakTo[selected2] ){
            if ( counters.has(weakTo[selected2][i]) ){
                counters2x.add(weakTo[selected2][i])
            }
            else {
                counters.add(weakTo[selected2][i])
            };
        };
        resultString = resultString + `${capitalize(selected2)} `;
    };

    resultString = resultString + ":<br>";
    for ( let i of counters ){
        resultString = resultString + `${capitalize(i)} `
    };
    resultString = resultString + "<br>";
    if ( counters2x.size != 0 ){
        resultString = resultString + "Double weak to : ";
        for ( let i of counters2x ){
            resultString = resultString + `${capitalize(i)} `
        }
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