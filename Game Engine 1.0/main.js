

let screen=document.getElementById("screen");
let info=document.getElementById("info");
let control=document.getElementById("control");

game=true;
let x=2;
let y=3;

let health=100;
let gold=0;

let chest=true;

let player=modernFontColor("@","Red")


let dungeonMap1= [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
                  ["X","C","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","O","S","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                  ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]


let playerMap1= [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
                 ["X","C","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","O","S","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","O","O","X","O","O","O","X"],
                 ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]


let dungeonMap2= [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","U","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]


let playerMap2=  [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","S","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X"],
                  ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]

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

function displayMaps(maps){
    for (let i=0; i<9;i++){
        screen.innerHTML+=(maps[i]+"</br>");
        maps[y][x] = player;
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

        position=mapChoice[y][x];      // convert the dungeon map y and x to gather infor of location 


        if (position=="X"){
            playerMapChoice[y][x] = "X";
            x= previousX
            y= previousY
            info.innerHTML=("You walk into a wall")
        }

        if (position=="C"){
            playerMapChoice[y][x] = "C";
            x= previousX
            y= previousY
            let question=window.confirm("Do you want to open the chest?");

            if (question==true){
                    if (chest==true){    

                        info.innerHTML=("You open the treasure chest ") 
                        info.innerHTML+=("You gain 100 gold")
                        chest=false;
                    } 

                    else{
                    info.innerHTML=("You have already opened the chest") 

                    }
            }

            else{
                info.innerHTML=("You don't open the treasure chest ") 

            }

        }


        if (position=="S"){
            let doorQuestion=window.confirm("Do you want to down the stairs ? ");

            if (doorQuestion==true){
                info.innerHTML=("You went down the stairs");
                mapChoice=dungeonMap2;
                playerMapChoice=playerMap2;
                x=4;
                y=3;
             
            }

            else{

                playerMapChoice[y][x] = "S";
                x= previousX
                y= previousY
                info.innerHTML=("You do not go down the stairs") 

            }

        }

        if (position=="U"){
            let doorQuestion=window.confirm("Do you want to go up the stairs ? ");

            if (doorQuestion==true){
                info.innerHTML=("You went up the stairs");
                mapChoice=dungeonMap1;
                playerMapChoice=playerMap1;
                x=2;
                y=3;
             
            }

            else{

                playerMapChoice[y][x] = "S";
                x= previousX
                y= previousY
                info.innerHTML=("You do not go up the stairs") 

            }

        }

      clearScreen();

    }
}
clearScreen();  // intiate the screen at the start 
info.innerHTML=(" 2D ASCII GAME ENGINE WITH STAIRS AND CHEST EXAMPLE  ");

