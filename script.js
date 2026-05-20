let x = 100;
let y = 400;

let current = "";

/* codes */
let safeCode = "123";
let doorCode = "1234";

/* player */
let player = document.getElementById("player");
let text = document.getElementById("text");
let controls = document.getElementById("controls");
let win = document.getElementById("win");

/* move */
document.addEventListener("keydown", function(event){

    if(event.key == "w"){
        y = y - 10;
    }

    if(event.key == "s"){
        y = y + 10;
    }

    if(event.key == "a"){
        x = x - 10;
    }

    if(event.key == "d"){
        x = x + 10;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";

    check();

    if(event.key == "e"){
        interact();
    }

});

/* check distance */
function near(id){

    let obj = document.getElementById(id);

    let ox = obj.offsetLeft;
    let oy = obj.offsetTop;

    if(Math.abs(x - ox) < 90 && Math.abs(y - oy) < 90){
        return true;
    }

    return false;
}

/* detect object */
function check(){

    current = "";

    if(near("note")){
        current = "note";
    }
    else if(near("desk")){
        current = "desk";
    }
    else if(near("tv")){
        current = "tv";
    }
    else if(near("lamp")){
        current = "lamp";
    }
    else if(near("safe")){
        current = "safe";
    }
    else if(near("pc")){
        current = "pc";
    }
    else if(near("door")){
        current = "door";
    }

    if(current != ""){
        text.innerHTML = "Press E to use: " + current;
    }
    else{
        text.innerHTML = "Explore the room";
    }

}

/* interact */
function interact(){

    controls.innerHTML = "";

    if(current == "note"){
        text.innerHTML = "Note says: Safe code is 123";
    }

    if(current == "desk"){
        text.innerHTML = "Desk: number 1";
    }

    if(current == "tv"){
        text.innerHTML = "TV: number 2";
    }

    if(current == "lamp"){
        text.innerHTML = "Lamp: number 3";
    }

    if(current == "safe"){

        text.innerHTML = "Enter safe code";

        controls.innerHTML =
        "<input id='safeInput'><button onclick='checkSafe()'>open</button>";

    }

    if(current == "pc"){
        text.innerHTML = "PC hint: door code is 1234";
    }

    if(current == "door"){

        text.innerHTML = "Enter door code";

        controls.innerHTML =
        "<input id='doorInput'><button onclick='checkDoor()'>open</button>";

    }

}

/* SAFE */
function checkSafe(){

    let value = document.getElementById("safeInput").value;

    if(value == safeCode){
        text.innerHTML = "Safe opened!";
    }
    else{
        text.innerHTML = "Wrong code";
    }

}

/* DOOR WIN */
function checkDoor(){

    let value = document.getElementById("doorInput").value;

    if(value == doorCode){

        win.style.display = "flex";

        for(let i = 0; i < 30; i++){

            let p = document.createElement("div");
            p.className = "p";
            p.style.left = Math.random() * window.innerWidth + "px";
            document.body.appendChild(p);

            setTimeout(function(){
                p.remove();
            }, 2000);

        }

    }
    else{
        text.innerHTML = "Wrong code";
    }

}