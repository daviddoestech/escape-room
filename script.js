var x = 100;
var y = 400;

var player = document.getElementById("player");
var text = document.getElementById("text");
var controls = document.getElementById("controls");
var win = document.getElementById("win");

var safeCode = "123";
var doorCode = "1234";

var current = "";

/* движење */
document.addEventListener("keydown", function(e){

    if(e.key == "w") y = y - 10;
    if(e.key == "s") y = y + 10;
    if(e.key == "a") x = x - 10;
    if(e.key == "d") x = x + 10;

    player.style.left = x + "px";
    player.style.top = y + "px";

    check();

    if(e.key == "e"){
        use();
    }
});

/* дали си блиску */
function near(objId){

    var obj = document.getElementById(objId);

    if(Math.abs(x - obj.offsetLeft) < 80 &&
       Math.abs(y - obj.offsetTop) < 80){
        return true;
    }

    return false;
}

/* проверка што гледаш */
function check(){

    current = "";

    if(near("note")) current = "note";
    else if(near("desk")) current = "desk"; /* маса */
    else if(near("tv")) current = "tv"; /* телевизор */
    else if(near("lamp")) current = "lamp"; /* ламба */
    else if(near("safe")) current = "safe"; /* сеф */
    else if(near("pc")) current = "pc"; /* компјутер */
    else if(near("door")) current = "door"; /* врата */

    if(current != ""){
        text.innerHTML = "Притисни E за: " + current;
    } else {
        text.innerHTML = "Истражувај ја собата";
    }
}

/* користење предмет */
function use(){

    controls.innerHTML = "";

    if(current == "note"){
        text.innerHTML = "Белешка: кодот за сеф е 123";
    }

    if(current == "desk"){
        text.innerHTML = "Биро: ништо интересно";
    }

    if(current == "tv"){
        text.innerHTML = "ТВ: број 2";
    }

    if(current == "lamp"){
        text.innerHTML = "Ламба: број 3";
    }

    if(current == "pc"){
        text.innerHTML = "PC: код за врата е 1234";
    }

    if(current == "safe"){

        text.innerHTML = "Внеси код за сеф";

        controls.innerHTML =
        "<input id='input1'><button onclick='safeCheck()'>отвори</button>";
    }

    if(current == "door"){

        text.innerHTML = "Внеси код за врата";

        controls.innerHTML =
        "<input id='input2'><button onclick='doorCheck()'>отвори</button>";
    }
}

/* сеф */
function safeCheck(){

    var v = document.getElementById("input1").value;

    if(v == safeCode){
        text.innerHTML = "СЕФ ОТВОРЕН!";
    } else {
        text.innerHTML = "Погрешен код";
    }
}

/* врата */
function doorCheck(){

    var v = document.getElementById("input2").value;

    if(v == doorCode){
        win.style.display = "flex";
    } else {
        text.innerHTML = "Погрешен код";
    }
}
