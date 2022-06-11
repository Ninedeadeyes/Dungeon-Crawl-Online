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
let ex=modernFontColor("E","Purple")
let heal=modernFontColor("H","Blue")
let mys=modernFontColor("?","Brown")
let gob=modernFontColor("G","Green")
let chest=modernFontColor("C","Orange")
let mon=modernFontColor("M","Brown")
let kni=modernFontColor("K","Grey")

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
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,wall,"O","H","O",wall,"O","O","O","O",wall,"O","O","G",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","H","O","O",wall,"O","O","O","H","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O",wall,wall,wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O",wall,"O",wall,"O",wall,"O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,"O",wall,"O","O","O",wall,"H","O","O","O","O","O","O","O","O","O","O","O",wall],
                  [wall,"H","O",wall,"O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","E",wall],
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
                  [wall,"O","O",wall,"O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O",wall,"O","O",ex,wall],
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

            let goblinQuestion=window.confirm("You see a sleeping Goblin, do you investigate ?");

            if (goblinQuestion==true){
                if (exitKey==false){    

                    info.innerHTML=("You find a key on him. You steal the key. ") 
                    exitKey=true;
                } 

                else{
                info.innerHTML=("You find nothing of interest.") 

                }
            }

            else{
                info.innerHTML=("You decide not the disturb the Goblin. He might wake up !! ") 

            }


        }

        if (position=="M"){
            playerMapChoice[y][x] = mon;
            x= previousX
            y= previousY
            info.innerHTML=("You see a holy monk.. He provide you with some help. </br>")
            info.innerHTML+=("'There are healing fountains scatter across the dungeon, use them or you won't survive.'");
        }




        if (position=="K"){
            playerMapChoice[y][x] = kni;
            x= previousX
            y= previousY

            let knightQuestion=window.confirm("You see the corpse of a Knight, do you investigate ?");

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

        if (position=="E"){
            playerMapChoice[y][x] = ex;
            x= previousX
            y= previousY

            if (exitKey==false){
                info.innerHTML=("The door is locked, find the key !!");
            }
            
            else{

                info.innerHTML=("You find the exit. You looted "+gold+" Gold from the dungeon. ");

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


        }


        /*  instead of ending game you can add another level with below code example 

                if (position=="E"){
                    info.innerHTML=("going through a door");
                    mapChoice=dungeonMap2;
                    playerMapChoice=playerMap2;
                    x=4;
                    y=3;

                }

        */ 

        if (position=="C"){
            playerMapChoice[y][x] = chest;
            x= previousX
            y= previousY


            let chestQuestion=window.confirm("Do you want to open the chest?");

            if (chestQuestion==true){
                    if (treasure==false){    

                        info.innerHTML=("You open the chest. ") 
                        info.innerHTML+=("You gain 800 gold !!")
                        gold=gold+800;
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
                     damage=Dice(10)+4;
                }
                else{
                    damage=Dice(7)+2;
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

