var numSquare = 6;
var colors= genrateRandomColors(numSquare);
var square =document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var easyBtn=document.querySelector("#easybtn")
var hardBtn=document.querySelector("#hardbtn")
colorDisplay.textContent = pickedColor;
var resetbtn= document.querySelector("#reset");



easyBtn.addEventListener("click",function(){
    messageDisplay.textContent=""
    resetbtn.textContent="New Colors"
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    colors= genrateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor="steelblue"
    for (var i=0;i<square.length;i++){

    if(colors[i]){
        square[i].style.backgroundColor=colors[i];
    } else{
        square[i].style.display="none";
    }
}
});
hardBtn.addEventListener("click",function(){
    messageDisplay.textContent=""
    resetbtn.textContent="New Colors"
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare = 6;
    colors= genrateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].style.display="block";
}
});

resetbtn.addEventListener("click", function(){
    messageDisplay.textContent=""
    resetbtn.textContent="New Colors"
    colors= genrateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0;i<square.length;i++){
        square[i].style.backgroundColor=colors[i];
    };
    h1.style.backgroundColor="steelblue"
})


for(var i=0;i<colors.length;i++){
    square[i].style.backgroundColor= colors[i];
    square[i].addEventListener("click", function(){
        var clickedColor=this.style.backgroundColor
        if (clickedColor===pickedColor){
            messageDisplay.textContent="Correct!!"

            resetbtn.textContent="Play Again"
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor="#232323"
            messageDisplay.textContent="try again!!"
            resetbtn.textContent="New Colors"

        }
    });
}


function changeColor(color){
    for (var i=0;i<square.length;i++){
        square[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random= Math.floor(Math.random()* colors.length);
    return colors[random];
}

function genrateRandomColors(num){
    var arr=[];
    for (var i=0; i<num;i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r= Math.floor(Math.random()* 255);
    var g= Math.floor(Math.random()* 255);
    var b= Math.floor(Math.random()* 255);
    return "rgb(" + r +", " + g + ", " +b + ")";
}