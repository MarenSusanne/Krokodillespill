firstNumbers()

function firstNumbers(){
    document.getElementById('rndNumber1').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('rndNumber2').innerHTML = Math.floor(Math.random() * 10);
}

let number1 = document.getElementById('rndNumber1');
let number2 = document.getElementById('rndNumber2');
let points = 0

function newNumbers(){
    firstNumbers();
    document.getElementById("answer").value = '';
}

function checkAnswer(){
    if(number1.innerHTML > number2.innerHTML){
        if(document.getElementById("answer").value == '>'){
            points++;
            document.getElementById("points").innerHTML = points;
            return alert("Correct!");
        }
        else if(document.getElementById("answer").value == '='){
            points--;
            document.getElementById("points").innerHTML = points;
            return alert("Try Again");
        }
        else(document.getElementById("answer").value == '<');{
            points--;
            document.getElementById("points").innerHTML = points;
            return alert("Try Again");
        }
    }
    else if(number1.innerHTML == number2.innerHTML){
        if(document.getElementById("answer").value == '='){
            points++;
            document.getElementById("points").innerHTML = points;
            return alert("Correct!");
        }
        else if(document.getElementById("answer").value == '>'){
            points--;
            document.getElementById("points").innerHTML = points;
            return alert("Try Again");
        }
        else(document.getElementById("answer").value == '<');{
            points--;
            document.getElementById("points").innerHTML = points;
            return alert("Try Again");
        }
    }
    else (number1.innerHTML < number2.innerHTML);{
        if(document.getElementById("answer").value == '<'){
            points++;
            document.getElementById("points").innerHTML = points;
            return alert("Correct!");
        }
        else if(document.getElementById("answer").value == '='){
            points--;
            document.getElementById("points").innerHTML = points;
            return alert("Try Again");
        }
        else(document.getElementById("answer").value == '>');{
            points--;
            document.getElementById("points").innerHTML = points;
            return alert("Try Again");
        }
    }
}