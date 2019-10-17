//variables and input
'use script'

//event listener
document.getElementById('submit').addEventListener('click', displaymessage);

function displaymessage(){
    
let verb = document.getElementById('verb').value;
let pluralnoun = document.getElementById('plural').value;
let adjective = document.getElementById('adj').value;
let tense = document.getElementById('tense').value
let noun = document.getElementById('noun').value

let message = '"There are too many ' + verb + " " + pluralnoun + ' on this ' + adjective + ' airplane!", I screamed. "Somebody has to ' + tense + ' on the ' + noun + ' to solve this problem!"';

document.getElementById('output').innerHTML = message;
}

