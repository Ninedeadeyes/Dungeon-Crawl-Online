let screen=document.querySelector("#screen");
let info=document.querySelector("#info");
let control=document.querySelector("#control");

game=true;
let x=2;
let y=3;

let health=100;
let gold=0;
let treasure=false;
let exitKey=false;
let sword=false;
let damage;

let monsters=["Goblin","Demon","Troll","Zombie","Ratling","Kobold","Golem","Ghoul"]
let wall=modernFontColor("X","Black")
let player=modernFontColor("@","Red")
let door=modernFontColor("D","Purple")
let heal=modernFontColor("H","Blue")
let mys=modernFontColor("?","Brown")
let gob=modernFontColor("G","Green")
let chest=modernFontColor("C","Orange")
let mon=modernFontColor("M","Brown")
let kni=modernFontColor("K","Grey")
let exit=modernFontColor("E","Red")
let hid=modernFontColor("F","Orange")



 let dungeonMap1= [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
                  [wall,"H","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","H",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"M","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","H","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","H","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,wall,wall,"H","O","O",wall,"O","K","O",wall],
                  [wall,"O","O","O",wall,"H","O","O","O",wall,"O","O","O","O","O",wall,"H","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,wall,"O",wall,wall,wall,"O",wall,wall,wall,"O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","H","O",wall,"O","O","O","H","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O","H","O","O",wall,"O","O","O","O","O","H","O",wall],
                  [wall,"H","O","O",wall,"O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O","O","O","O","O","O","O","O","O","O","H","O","O","O",wall,wall,wall,wall,wall,wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O","O",wall,"O","O","C",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,wall,"O","H","O","O","O","O","O","O",wall,"O","O","G",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","H","O","O",wall,"O","O","O","H","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O",wall,wall,wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O",wall,"O",wall,"O",wall,"O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,"O",wall,"O","O","O",wall,"H","O","O","O","O","O","O","O","O","O","O","O",wall],
                  [wall,"H","O",wall,"O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","D",wall],
                  [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]]

 let playerMap1=  [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","@","O",wall,mys,"O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall,"O",mys,"O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,wall,"O",wall,wall,wall,"O",wall,wall,wall,"O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wall,wall,wall,wall,wall,wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O","O",wall,"O","O",mys,wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,wall,"O","O","O",wall,"O","O","O","O",wall,"O","O",mys,wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O",wall,wall,wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O",wall,"O",wall,"O",wall,"O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,"O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O",wall,"O","O",door,wall],
                  [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]]

let dungeonMap2= [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","W","Q","Q","Q","Q","Q","Q","Q","F","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","W","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","O","Q","Q","Q","W","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","W","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,wall,wall,wall,wall,"Q","Q","Q","Q","Q","W","O","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","O","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","O","Q","W","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","O","Q","Q","W","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","O","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","W","Q","Q","Q","Q","Q","O","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","W","Q","Q","Q",wall],
                  [wall,"W","T","W","Q","Q","Q","Q","Q","Q","Q",wall,wall,wall,wall,wall,"Q","Q","Q",wall,"Q","Q","Q","Q","Q","W","T","W","Q","Q",wall],
                  [wall,"Q","W","Q","Q","Q","Q","Q","Q","W","Q",wall,"Q","W","Q","Q","Q","Q","Q","Q",wall,wall,wall,wall,"Q","Q","W","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","W","T","W",wall,"W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","W","Q",wall,"Q","W","Q","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","W","Q","O","Q","Q","Q","Q","W","Q","Q",wall,"Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"W","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","O","Q","Q","Q","Q",wall,"T","W","Q",wall],
                  [wall,"Q","Q","H","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"W","Q","E",wall],
                  [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]]


let playerMap2= [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,wall,wall,wall,wall,"Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,wall,wall,wall,wall,wall,wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,wall,wall,"Q",wall,wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall,wall,wall,wall],
                  [wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wall],
                  [wall,"Q","Q","Q","Q",wall,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",exit,wall],
                  [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]]




let mapChoice=dungeonMap1;
let playerMapChoice=playerMap1;

let position=mapChoice[y][x];

// Functions 
function modernFontColor(str, color) {
    return '<span style="color: ' + color + '">' + str + '</span>';
}

function clearScreen(){
    screen.innerHTML=" ";
    displayMaps(playerMapChoice);
}

function Dice(side){
let result=Math.floor(Math.random()*side)+1;
    return result;

}

function displayMaps(maps){
    for (let i=0; i<25;i++){
        screen.innerHTML+=(maps[i]+"</br>");
        
        maps[y][x] = player;   // to pinpoint player on the map 
    }
}

function clickHandler(dir)  {

    if (game==true){
            
        info.innerHTML=" " ;      //clear screen for info
        let previousX=x;          //  in case you hit into a wall
        let previousY=y;
        playerMapChoice[y][x] = "O";   // so you don't leave a trail of 'p' 

        if (dir==1){
            y--;
        }

        if (dir==2){
            x++;
        }

        if (dir==3){
            y++;
        }

        if (dir==4){
            x--;
        }

        position=mapChoice[y][x];      // convert the dungeon map y and x to gather dungeon maps information   

        if (position==wall){
            playerMapChoice[y][x] = wall;
            x= previousX
            y= previousY
            info.innerHTML=("You walk into a wall.")
        }

        if (position=="G"){
            playerMapChoice[y][x] = gob;
            x= previousX
            y= previousY

            let goblinQuestion=window.confirm("You see a sleeping Goblin. Do you wake him up ?");

            if (goblinQuestion==true){
                if (exitKey==false){    

                    info.innerHTML=("He seems to be in a deep sleep but ") 
                    info.innerHTML+=("you find a key on him. You steal the key. ") 
                    exitKey=true;
                } 

                else{
                    info.innerHTML=("You have already taken his key, leave him to slumber. ") 

                }
            }

            else{
                info.innerHTML=("You decide not the disturb the Goblin. ") 

            }


        }

        if (position=="M"){
            playerMapChoice[y][x] = mon;
            x= previousX
            y= previousY
            info.innerHTML=("You see a holy monk.. He provide you with some help.  </br>")
            info.innerHTML+=("'There are healing fountains scatter across the dungeon, use them or you won't survive. ");
            info.innerHTML+=("I will give you a tip to find some. Search the corners of the dungeon.'");
        }




        if (position=="K"){
            playerMapChoice[y][x] = kni;
            x= previousX
            y= previousY

            let knightQuestion=window.confirm("You see the corpse of a Knight. Do you investigate ?");

            if (knightQuestion==true){
                if (sword==false){    

                    info.innerHTML=("You find a holy sword. ") 
                    sword=true;
                } 

                else{
                info.innerHTML=("You have already ransacked his corpse, shame !! ") 

                }
            }

            else{
                info.innerHTML=(" You let the dead sleep.") 

            }

        }

        if (position=="H"){
            playerMapChoice[y][x] = heal;
            x= previousX
            y= previousY
            if (health<90){

                health=90;
                info.innerHTML=("You find a fountain of healing, you recover most of your health. Your health is "+health +" .");
            }
            else{
                info.innerHTML=("You find a fountain of healing but you feel fine. Your health is "+health+" .");
            }

        }

        if (position=="D"){
            playerMapChoice[y][x] = door ;
            x= previousX
            y= previousY

            if (exitKey==false){
                info.innerHTML=("The door is locked, find the key !!");
            }
            
            else{
                info.innerHTML=("You go through the door. Your heart is filled with dread as you see how far away the exit is. Can you get out alive !! ");
                mapChoice=dungeonMap2;
                playerMapChoice=playerMap2;
                x=4;
                y=3;

            }


        }

        if (position=="E"){
            playerMapChoice[y][x] = exit ;
            x= previousX
            y= previousY

            info.innerHTML=("At last you find the exit. You looted "+gold+" Gold from the dungeon. ");

            if (gold>1500){
                info.innerHTML+=("Wow..That is a lot of loot.You are an awesome dungeon crawler !!")
            }
            else if (gold>700 & gold <1500){
                info.innerHTML+=("You did fairly well for a newbie :P You can do better !! ")
            }

            else{
                info.innerHTML+=("Wow.. You were lucky to leave the dungeon alive. Maybe try fishing instead? ")
            }

            game=false;

        }

        if (position=="Q"){
            let exitEvent=Dice(6);
            if(exitEvent==1){
                info.innerHTML=("You are nearly there !! Is that a Dragon behind you ? Your health is "+health+".</br> ")
            }

            else if(exitEvent==2){
                info.innerHTML=("You see something in the shadows, you feel a bad premonition ahead. You could not die now... Your health is "+health+".</br> ")
                }

            else if(exitEvent==3){
                info.innerHTML=("A few more steps now and you can finally go home. You hear the chattering of goblins, your hope is fleeting. Your health is "+health+".</br> ")
                }

            else if(exitEvent==4){
                info.innerHTML=("You wonder where did the boss go ? They are usually at the end of the dungeon. Your health is "+health+".</br> ")
                }

            else if(exitEvent==5){
                    info.innerHTML=("You are bleeding quite bad, can you stand another fight ?? You miss your family. Your health is "+health+".</br> ")
                    }

            else{

                info.innerHTML=(" You sense something unholy up ahead. You put on your bravest mask. Your health is "+health+".</br> ")

            }
        }   

        if (position=="W"){

            info.innerHTML=("You sense a trap nearby, be careful !!! Your health is "+health+" . ")
            }
           


        if (position=="T"){

            let event=Dice(6);
            if (event>2){
                damage=Dice(12)+4;
                health=health-damage;

                info.innerHTML=(" Watch out !! Its a trap !! You fell into the trap.  Your health is "+health+" .</br>");

                if (health<=0){
                    info.innerHTML+=("</br>Wounds upon wounds you fall to the ground GAME OVER.");
                    game=false;
                }
            }

            else{
                info.innerHTML+=(" Watch out !! Its a trap !! You manage to evade the trap.");
            } 
        }


        
        if (position=="F"){
            playerMapChoice[y][x] =hid;
            x= previousX
            y= previousY
            gold=gold+100;
            info.innerHTML=("You found the mythical fountain of gold !! It seems everlasting !! ");
            info.innerHTML+=("You gain 100 gold !! You have "+gold+" gold.")
           
        }


        if (position=="C"){
            playerMapChoice[y][x] = chest;
            x= previousX
            y= previousY


            let chestQuestion=window.confirm("You see a chest. Do you want to open it ?");

            if (chestQuestion==true){
                    if (treasure==false){    
                        gold=gold+800;
                        info.innerHTML=("You open the chest. ") 
                        info.innerHTML+=("You gain 800 gold !! You have "+gold+" gold.")
                        treasure=true;
                    } 

                    else{
                    info.innerHTML=("You have already opened the chest.") 

                    }
            }

            else{
                info.innerHTML=("You leave the chest alone. ") 

            }

        }

        
        if (position=="O"){

            let event=Dice(6);
            if (event>4){
                if (sword==false){
                     damage=Dice(10)+2;
                }
                else{
                    damage=Dice(7)+1;
                }
                health=health-damage;
                let randomMonster;
                randomMonster= monsters[Math.floor(Math.random() * monsters.length)];

                info.innerHTML=("A "+randomMonster+" attack you, you lose "+damage+" health. Your health is "+health+" .</br>");
                info.innerHTML+=("You slay the "+randomMonster);

                if (sword==true){
                    info.innerHTML+=(" with your holy sword.");
                }

                else{
                    info.innerHTML+=(" with your rusty sword.");
                }
               
                if (health<=0){
                    info.innerHTML=("A "+randomMonster+" delivers a deadly blow ")
                    info.innerHTML+=("</br>Wounds upon wounds you fall to the ground GAME OVER.");
                    game=false;
                }
            }

            else{
                let collect=Dice(10);
                gold=gold+collect;
                info.innerHTML+=("You find "+collect+" gold. You have "+gold+" gold.");
            } 
        }

    
       clearScreen();

    }
    

}
clearScreen();  // intiate the screen at the start 
info.innerHTML=("Defeat Monsters, collect gold and escape the dungeon.</br> Turn on the music and let the struggle begin..");

