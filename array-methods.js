const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
var button = document.getElementById("list-planets");
var capButt = document.getElementById("cap-planets");
var eButt = document.getElementById("only-e");
var redButt = document.getElementById("reduce-sent")

const secSen = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

var newArray = [];


function listPlanets(x){
    
    planetEl.innerHTML += `${x}<br>`
    
}

function writeArray(){
    planets.forEach(listPlanets)
}
function writeCaps(){
    capitalize(planets).forEach(listPlanets)
}

function writeE(){
    onlyE(planets).forEach(listPlanets)
}

function writeReduce(){
    reducePlug(reduceSent(secSen))
}

function reducePlug(y){
    planetEl.innerHTML += `${totalSent} `
};



function test(){
    console.log("biiitch")
}




const planetEl = document.getElementById("planets")


function capitalize(word){
    return word.map(function(word){
        return(word.charAt(0).toUpperCase() + word.slice(1));
        
    })
}

function onlyE(array){
    for(i=0;i < array.length;i++){
        if(array[i].includes("e") === true){
            newArray.push(array[i])
        }
    }
    return newArray;
    
}

// function reduceSent(array){

var totalSent = secSen.reduce(function(prev, curr) {
    return (prev +" " + curr);

});
// }


button.addEventListener("click",writeArray);
capButt.addEventListener("click",writeCaps);
eButt.addEventListener("click",writeE);
redButt.addEventListener("click",reducePlug);




/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.


*/




// var totalSent = reduceSent(secSen);
/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array

