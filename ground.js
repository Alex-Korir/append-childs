//Challenge 1: Your age in days


function ageInDays() {
    var birthYear = prompt("Which year were you born");
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays'); 
    h1.appendChild(textAnswer);
    document.getElementById('box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator 
function generatorCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-box-div');
    image.src = "Cat generator.jpg";
    div.appendChild(image);
}

function greet(name){
    return "Hi, i'm " + name;
}
console.log(greet("Alex"));

function greeet(name){
    return "Hi, my name is " + name;

}
console.log(greeet("Korir"));

function makeAdjective(adjective){
    return function (string){
        return adjective + " " + string;
    };
}
var coolier = makeAdjective("cool");
console.log(coolier("conference"));

function Ageindays(){
    let year = Number(prompt("What is your year of birth"));
    console.log(year);
}

