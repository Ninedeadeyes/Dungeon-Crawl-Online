let clickButtonNorth=document.querySelector("#clickNorth");
let clickButtonEast=document.querySelector("#clickEast");
let clickButtonSouth=document.querySelector("#clickSouth");
let clickButtonWest=document.querySelector("#clickWest");

const bkMusic = document.querySelector("#theme");
let musicOn=false;

let screen=document.querySelector("#screen");
let info=document.querySelector("#info");
let control=document.querySelector("#control");
let game=true;
let x=2;
let y=3;
let health=100;
let gold=0;
let treasure=false;
let exitKey=false;
let sword=false;
let damage;
let monsters=["Goblin","Demon","Troll","Zombie","Ratling","Kobold","Golem","Ghoul"];

let modernFontColor=(str,color)=> '<span style="color: ' + color + '">' + str + '</span>';

let wal=modernFontColor("X","White");
let player=modernFontColor("@","Red");
let door=modernFontColor("D","Purple");
let heal=modernFontColor("H","Blue");
let mys=modernFontColor("?","Brown");
let gob=modernFontColor("G","Green");
let chest=modernFontColor("C","Yellow");
let mon=modernFontColor("M","Brown");
let kni=modernFontColor("K","Grey");
let exit=modernFontColor("E","Red");
let hid=modernFontColor("F","Yellow");
let jester=modernFontColor("J","Orange");

 let dungeonMap1=[[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
                  [wal,"H","O","O","O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O",wal,"O","O","H",wal],
                  [wal,"O","O","O",wal,wal,wal,wal,"O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O","O","O","O",wal],
                  [wal,"O","O","O",wal,"M","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","H","O",wal,"O","O","O","O","O","O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O","O","O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O","O","O","O","H","O","O",wal,"O","O","O","O","O",wal,wal,wal,wal,"O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O",wal,"O","O","O","O","O",wal,wal,wal,wal,"O",wal,wal,wal,"H","O","O",wal,"O","K","O",wal],
                  [wal,"O","O","O",wal,"H","O","O","O",wal,"O","O","O","O","O",wal,"H","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,wal,"O",wal,wal,wal,"O",wal,wal,wal,"O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O","O","O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","H","O",wal,"O","O","O","H","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,wal,wal,wal,wal],
                  [wal,"O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,wal,wal,wal,wal,"O","O","O","O","O","O",wal,"O","O","O","H","O","O",wal,"O","O","O","O","O","H","O",wal],
                  [wal,"H","O","O",wal,"O","O","O",wal,wal,wal,wal,wal,wal,wal,wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","J",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O","O","O","O","O","O","O","O","O","O","H","O","O","O",wal,wal,wal,wal,wal,wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,wal,wal,wal,wal,wal,wal,"O","O","O","O","O","O","O",wal,"O","O","C",wal,"O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,wal,wal,wal,wal,wal,wal,wal,wal,"O","H","O","O","O","O","O","O",wal,"O","O","G",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O",wal,wal,wal,wal,wal],
                  [wal,"O","O","O","O","O","H","O","O",wal,"O","O","O","H","O",wal,"O","O","O","O","O",wal,"O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O",wal,wal,wal,wal,wal,wal,"O",wal,wal,wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,"O",wal,"O",wal,"O",wal,"O",wal,"O","O","O","O","O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,wal,wal,"O",wal,"O","O","O",wal,"H","O","O","O","O","O","O","O","O","O","O","O",wal],
                  [wal,"H","O",wal,"O","O","O","O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O","O","O",wal,"O","O","D",wal],
                  [wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal]]

 let playerMap1= [[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
                  [wal,"O","O","O","O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,wal,wal,wal,"O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O","O","O","O",wal],
                  [wal,"O","@","O",wal,mys,"O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O","O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O","O","O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O","O","O","O","O","O","O",wal,"O","O","O","O","O",wal,wal,wal,wal,"O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O",wal,"O","O","O","O","O",wal,wal,wal,wal,"O",wal,wal,wal,"O","O","O",wal,"O",mys,"O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,wal,"O",wal,wal,wal,"O",wal,wal,wal,"O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O","O","O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,wal,wal,wal,wal],
                  [wal,"O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,wal,wal,wal,wal,"O","O","O","O","O","O",wal,"O","O","O","O","O","O",wal,"O","O","O","O","O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O",wal,wal,wal,wal,wal,wal,wal,wal,"O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O",wal,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",mys,wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O",wal,wal,wal,wal,wal,wal,"O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,wal,wal,wal,wal,wal,wal,"O","O","O","O","O","O","O",wal,"O","O",mys,wal,"O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,wal,wal,wal,wal,wal,wal,wal,wal,"O","O","O",wal,"O","O","O","O",wal,"O","O",mys,wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O",wal,wal,wal,wal,wal],
                  [wal,"O","O","O","O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,"O","O","O","O","O",wal,"O",wal,wal,wal,wal,wal,wal,"O",wal,wal,wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,"O",wal,"O",wal,"O",wal,"O",wal,"O","O","O","O","O","O","O","O",wal,"O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O",wal,wal,wal,"O",wal,"O","O","O",wal,"O","O","O","O","O","O","O","O","O","O","O","O",wal],
                  [wal,"O","O",wal,"O","O","O","O","O","O","O","O","O",wal,"O","O","O",wal,"O","O","O","O","O","O","O","O",wal,"O","O",door,wal],
                  [wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal]]

let dungeonMap2= [[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","W","Q","Q","Q","Q","Q","Q","Q","F","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","W","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","O","Q","Q","Q","W","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","W","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,wal,wal,wal,wal,"Q","Q","Q","Q","Q","W","O","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","W",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","O","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","W","T",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","O","Q","W","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","W",wal],
                  [wal,"Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q",wal,"Q","W","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","O","Q","Q","W","Q","Q","Q","Q",wal,"W","T","W","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","O","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","W","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","W","Q","Q","Q","Q","Q","O","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","W","Q","Q","Q",wal],
                  [wal,"W","T","W","Q","Q","Q","Q","Q","Q","Q",wal,wal,wal,wal,wal,"Q","Q","Q",wal,"Q","Q","Q","Q","Q","W","T","W","Q","Q",wal],
                  [wal,"Q","W","Q","Q","Q","Q","Q","Q","W","Q",wal,"Q","W","Q","Q","Q","Q","Q","Q",wal,wal,wal,wal,"Q","Q","W","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","W","T","W",wal,"W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","W","Q",wal,"Q","W","Q","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","W","Q","Q",wal,"Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"W","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","W","Q","Q","Q","W","Q","Q","Q","Q","Q","Q","Q","Q","O","Q","Q","Q","Q",wal,"T","W","Q",wal],
                  [wal,"Q","Q","H","Q","Q","Q","Q","Q","Q","Q","W","T","W","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"W","Q","E",wal],
                  [wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal]]

let playerMap2= [[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,wal,wal,wal,wal,"Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,wal,wal,wal,wal,wal,wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,wal,wal,"Q",wal,wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal,wal,wal,wal],
                  [wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",wal],
                  [wal,"Q","Q","Q","Q",wal,"Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q","Q",exit,wal],
                  [wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal]]
                  
let mapChoice=dungeonMap1;
let playerMapChoice=playerMap1;
let position=mapChoice[y][x];

let clearScreen=()=>{
    screen.innerHTML=" ";
    displayMaps(playerMapChoice);
}

let Dice=side=>Math.floor(Math.random()*side)+1;

let displayMaps=(maps)=>{

    for (let i=0; i<mapChoice.length;i++){
        screen.innerHTML+=(maps[i]+"</br>");
        maps[y][x] = player;   // to pinpoint player on the map 
    }
}

let getJoke = async () => {
    try{
        const jokeData= await fetch("https://icanhazdadjoke.com/",{
            headers:{
                "Accept":"application/json"
            }
        });
    
        const jokeObj=await jokeData.json();
        info.innerHTML="Chained to the wall, the Mad Jester 'Krok' tells you a joke...."+(jokeObj.joke);
    }

    catch(e){
        info.innerHTML="Chained to the wall, the Mad Jester 'Krok' has no jokes for you";
    }
}



let clickHandler=(dir)=> {

    if (game==true){

        if (!musicOn){
            musicOn=true;
            bkMusic.play();
        }

        info.innerHTML=" " ;      //clear screen for info
        let previousX=x;          //  in case you hit into a wal
        let previousY=y;
        playerMapChoice[y][x] = "O";   // so you don't leave a trail of 'p' 

        dir===1 ? y--: 
        dir===2 ? x++:
        dir==3 ? y++:
        dir==4 && (x--);

        position=mapChoice[y][x];      // convert the dungeon map y and x to gather dungeon maps information   

        if (position==wal){
            playerMapChoice[y][x] = wal;
            x= previousX;
            y= previousY;
            info.innerHTML=("You walk into a wall.")
        }

        if (position=="G"){
            playerMapChoice[y][x] = gob;
            x= previousX;
            y= previousY;

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
            x= previousX;
            y= previousY;
            info.innerHTML=("You see a holy monk.. He provide you with some help")
            info.innerHTML+=(". 'There are healing fountains scatter across the dungeon, use them or you won't survive. ");
            info.innerHTML+=("I will give you a tip to find some. Search the corners of the dungeon.'");
        }

        if (position=="J"){
            playerMapChoice[y][x] = jester;
            x= previousX;
            y= previousY;
            getJoke();   
        }

        if (position=="K"){
            playerMapChoice[y][x] = kni;
            x= previousX;
            y= previousY;
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
            x= previousX;
            y= previousY;
            if (health<90){

                health=90;
                info.innerHTML=(`You find a fountain of healing, you recover most of your health. Your health is ${health} .`);
            }

            else{
                info.innerHTML=(`You find a fountain of healing but you feel fine. Your health is ${health}.`);
            }
        
        }

        if (position=="D"){
            playerMapChoice[y][x] = door ;
            x= previousX;
            y= previousY;

            if (exitKey==false){
                info.innerHTML=("The door is locked, find the key !!");
            }
            
            else{
                info.innerHTML=("You go through the door. Your heart is filled with dread as you see how far away the exit is. Can you get out alive !! ");
                info.innerHTML+=("THERE ARE POWERFUL TRAPS SCATTER ACROSS THIS DUNGEON, WATCH OUT FOR THE WARNING SIGNS !! ");
                mapChoice=dungeonMap2;
                playerMapChoice=playerMap2;
                x=4;
                y=3;
            }
        
        }

        if (position=="E"){
            playerMapChoice[y][x] = exit ;
            x= previousX;
            y= previousY;

            info.innerHTML=(`At last, you find the exit. You looted ${gold} Gold from the dungeon.`);
            gold>=1500 ? info.innerHTML+=("Wow..That is a lot of loot.You are an awesome dungeon crawler !!"):
            gold>700 && gold <1500 ? info.innerHTML+=("You did fairly well for a newbie :P You can do better !! "):
            gold<=700 &&  (info.innerHTML+=("Wow.. You were lucky to leave the dungeon alive. Maybe try fishing instead? "));
            game=false;
        }

        if (position=="Q"){
            let exitEvent=Dice(6);

            exitEvent=== 1 ?  info.innerHTML=("You are nearly there !! Is that a Dragon behind you ? "):
            exitEvent=== 2 ?  info.innerHTML=("You see something in the shadows, you feel a bad premonition ahead. You could not die now..."):
            exitEvent=== 3 ?  info.innerHTML=("A few more steps now and you can finally go home. You hear the chattering of goblins, your hope is fleeting."):
            exitEvent=== 4 ?  info.innerHTML=("You wonder where did the boss go ? They are usually at the end of the dungeon. "):
            exitEvent=== 5 ?  info.innerHTML=("You are bleeding quite bad, can you stand another fight ?? You miss your family."):
            exitEvent=== 6 && (info.innerHTML=(" You sense something unholy up ahead. You put on your bravest mask."));
            info.innerHTML+=`Your health is ${health}`;
        }   

        if (position=="W"){
            info.innerHTML=(`You sense a trap nearby, be careful !!! Your health is ${health}.`);
            }
           
        if (position=="T"){
            let event=Dice(6);
            if (event>1){
                damage=Dice(12)+12;
                health=health-damage;
                info.innerHTML=(` Watch out !! Its a trap !! You fell into the trap, you lose ${damage} health. Your health is ${health} .</br>`);

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
            x= previousX;
            y= previousY;
            gold=gold+100;
            info.innerHTML=("You find the mythical fountain of gold !! It seems everlasting !! ");
            info.innerHTML+=(`You gain 100 gold !! You have ${gold} gold.`);
        }

        if (position=="C"){
            playerMapChoice[y][x] = chest;
            x= previousX;
            y= previousY;
            let chestQuestion=window.confirm("You see a chest. Do you want to open it ?");
         
            if (chestQuestion==true){
                    if (treasure==false){    
                        gold=gold+800;
                        info.innerHTML=("You open the chest."); 
                        info.innerHTML+=(`You gain 800 gold !! You have ${gold} gold.`);
                        treasure=true;
                    } 

                    else{
                    info.innerHTML=("You have already opened the chest.");
                    }
        
                }

            else{
                info.innerHTML=("You leave the chest alone. "); 
            }
        
        }
        
        if (position=="O"){
            let event=Dice(6);
        
            if (event>4){

                sword===false ? damage=Dice(10)+2 :damage=Dice(7)+1;
  
                health=health-damage;
                let randomMonster;
                randomMonster= monsters[Math.floor(Math.random() * monsters.length)];
                info.innerHTML=(`A ${randomMonster} attacks you, you lose ${damage} health. Your health is ${health} .</br>`);
                info.innerHTML+=(`You slay the ${randomMonster}`);

                sword===true ? info.innerHTML+=(" with your holy sword."): info.innerHTML+=(" with your rusty sword.");

                if (health<=0){
                    info.innerHTML=(`A ${randomMonster} delivers a deadly blow `);
                    info.innerHTML+=("</br>Wounds upon wounds you fall to the ground GAME OVER.");
                    game=false;
                }
        
            }

            else{
                let collect=Dice(10);
                gold=gold+collect;
                info.innerHTML+=(`You find ${collect} gold. You have ${gold} gold.`);
            } 
        
        }

       clearScreen();
    }

}

clickButtonNorth.addEventListener("click", ()=>{
    clickHandler(1); 
    });

clickButtonEast.addEventListener("click", ()=>{
    clickHandler(2); 
    });

clickButtonSouth.addEventListener("click", ()=>{
    clickHandler(3); 
    });

clickButtonWest.addEventListener("click", ()=>{
    clickHandler(4); 
    });
        
clearScreen();  // intiate the screen at the start 
info.innerHTML=("Defeat Monsters, collect gold and escape the dungeon.</br> Take your first step and let the struggle begin..");
