let screen=document.querySelector("#screen");
let info=document.querySelector("#info");
let control=document.querySelector("#control");

game=true;
let x=2;
let y=3;

let health=100;
let gold=0;

let monsters=["Goblin","Demon","Troll","Zombie","Ratling","Kobold","Golem","Ghoul"]
let wall=modernFontColor("X","Black")
let player=modernFontColor("@","Red")
let ex=modernFontColor("E","Purple")
let heal=modernFontColor("H","Blue")

 let dungeonMap= [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
                  [wall,"H","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","H",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","@","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","H","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","H","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall,"O","H","O",wall],
                  [wall,"O","O","O",wall,"H","O","O","O",wall,"O","O","O","O","O",wall,"H","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,wall,"O",wall,wall,wall,"O",wall,wall,wall,"O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","H","O",wall],
                  [wall,"O","O","O",wall,"O","H","O",wall,"O","O","O","H","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O","H","O","O",wall,"O","O","O","O","O","H","O",wall],
                  [wall,"H","O","O",wall,"O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O","O","O","O","O","O","O","O","O","O","H","O","O","O",wall,wall,wall,wall,wall,wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O","O",wall,"O","O","O",wall,"H","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,wall,"O","H","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","H","O","O",wall,"O","O","O","H","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O",wall,wall,wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O",wall,"O",wall,"O",wall,"O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,"O",wall,"O","O","O",wall,"H","O","O","O","O","O","O","O","O","O","O","O",wall],
                  [wall,"H","O",wall,"O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","E",wall],
                  [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]]

 let playerMap=  [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","P","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,wall,"O",wall,wall,wall,"O",wall,wall,wall,"O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O",wall,"O","O","O","O","O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wall,wall,wall,wall,wall,wall,"O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,wall,wall,wall,wall,wall,wall,"O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,wall,wall,wall,wall,wall,wall,"O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,wall,wall,wall,wall],
                  [wall,"O","O","O","O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O","O","O","O","O",wall,"O",wall,wall,wall,wall,wall,wall,"O",wall,wall,wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,"O",wall,"O",wall,"O",wall,"O",wall,"O","O","O","O","O","O","O","O",wall,"O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O",wall,wall,wall,"O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O","O","O","O","O",wall],
                  [wall,"O","O",wall,"O","O","O","O","O","O","O","O","O",wall,"O","O","O",wall,"O","O","O","O","O","O","O","O",wall,"O","O",ex,wall],
                  [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]]

let mapChoice=dungeonMap;

let position=mapChoice[y][x];

// Functions 
function modernFontColor(str, color) {
    return '<span style="color: ' + color + '">' + str + '</span>';
}

function clearScreen(){
    screen.innerHTML=" ";
    displayMaps(playerMap);
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
        playerMap[y][x] = "O";   // so you don't leave a trail of 'p' 
        
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
            playerMap[y][x] = wall;
            x= previousX
            y= previousY
            info.innerHTML=("You walk into a wall")
        }

        if (position=="H"){
            playerMap[y][x] = heal;
            x= previousX
            y= previousY
            if (health<90){

                health=90;
                info.innerHTML=("You find a fountain of healing, you recover most of your health. Your health is "+health);
            }
            else{
                info.innerHTML=("You find a fountain of healing but you feel fine. Your health is "+health);
            }

        }

        if (position=="E"){
            playerMap[y][x] = ex;
            x= previousX
            y= previousY
            info.innerHTML=("You find the exit. You looted "+gold+" Gold from the dungeon. ");
            if (gold>1000){
                info.innerHTML+=("Wow..That is a lot of loot.You are an awesome Dungeon Crawler !!")
            }
            else if (gold>500 & gold <1000){
                info.innerHTML+=("You did fairly well for a newbie :P")
            }

            else{
                info.innerHTML+=("Wow..You were lucky to leave the dungeon alive. Maybe try fishing instead? ")
            }

            game=false;
        }
        
        if (position=="O"){

            let event=Dice(6);
            if (event>4){

                let damage=Dice(8)+2;
                health=health-damage;
                let randomMonster;
                randomMonster= monsters[Math.floor(Math.random() * monsters.length)];

                info.innerHTML=("A "+randomMonster+" attack you, you lose "+damage+" health. Your health is "+health+"</br>");
                info.innerHTML+=("You slay the "+randomMonster);
                
                if (health<=0){
                    info.innerHTML=("Wounds upon wounds you fall to the ground GAME OVER </br>");
                    info.innerHTML+=("Tip: There are healing fountains scatter across the dungeon");
                    game=false;
                }
            }

            else{
                let collect=Dice(10);
                gold=gold+collect;
                info.innerHTML+=("You find "+collect+" gold. You have "+gold+" gold");
            } 
        }

    clearScreen();

    }
}

clearScreen();  // intiate the screen at the start 
info.innerHTML=("Defeat Monsters, collect gold and escape the dungeon.</br> Turn on the music and let the struggle begin..");

