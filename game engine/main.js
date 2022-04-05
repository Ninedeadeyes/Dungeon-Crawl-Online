let screen=document.querySelector("#screen");
let info=document.querySelector("#info");
let control=document.querySelector("#control");

game=true;
let x=2;
let y=3;

 let dungeonMap= [["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","p","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","h","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]]

 let playerMap = [["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","p","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","x"],
                  ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]]

let mapChoice=dungeonMap;

let position=mapChoice[y][x];

function clearScreen(){
    screen.innerHTML=" ";
    displayMaps(playerMap);
}

function displayMaps(maps){
    for (let i=0; i<10;i++){
        screen.innerHTML+=(maps[i]+"</br>");
        maps[y][x] = "p";
        
    }
}

function clickHandler(dir)  {

    if (game==true){
            
        info.innerHTML=" " ;      //clear screen for info
        let previousX=x;          //  in case you hit into a wall
        let previousY=y;
        playerMap[y][x] = "0";   // so you don't leave a trail of 'p' 
        
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

        position=mapChoice[y][x];      // convert the dungeon map y and x to gather infor of location 

        if (position=="x"){
            playerMap[y][x] = "x";
            x= previousX
            y= previousY
            info.innerHTML=("You walk into a wall");
        }

        if (position=="h"){
            playerMap[y][x] = "h";
            x= previousX
            y= previousY
            info.innerHTML=("Old Man: go away I am trying to think");    
        }
        
        if (position=="0"){
            info.innerHTML=("Nothing to see here");
            }
               
         clearScreen();

    }
}

clearScreen();  // intiate the screen at the start 
info.innerHTML=("This is the basic game engine ");