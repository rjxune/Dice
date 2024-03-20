 let randomNumber1 = Math.floor(Math.random()* 6)+ 1;//-- generates random number 1 - 6;

 let randomDiceImage = "dice" + randomNumber1 + ".png";//-- filenmae

 let randomSourceImage = "images/" + randomDiceImage;//-- path

let image1 =document.querySelectorAll("img")[0];//-- dom
image1.setAttribute("src", randomSourceImage);//-- sets attribute


let randomNumber2 = Math.floor(Math.random()* 6)+1; // generates random number 1-6;

let randomDiceImage2 = "dice"+ randomNumber2 + ".png"; //-- filename;

let randomSourceImage2 ="images/" + randomDiceImage2; // path;

let image2 = document.querySelectorAll("img")[1]; //dom;

image2.setAttribute("src", randomSourceImage2);//-- attribute;

if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 wins 🏁";
    document.querySelector("h1").style.color = "purple";
}
else if (randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML ="Player 2 wins 🎌";
    document.querySelector("h1").style.color ="pink";

}
else{
    document.querySelector("h1").innerHTML ="Draw 🚩";
}