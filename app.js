'use strict'

// get dom of image
var imgElement1 = document.getElementById('img1');
var imgElement2 = document.getElementById('img2');
var imgElement3 = document.getElementById('img3');


var totalClicks = 0;

// array to store images
Img.allProducts = [];
// ProductID = []



// cunstucter object to create images
function Img(filepath, imgName){
    this.filepath = filepath;
    this.imgName = imgName;
    this.score = 0;
    this.views = 0; 

    Img.allProducts.push(this);

}

// adding all images
new Img ('img/bag.jpg', 'bag');
new Img ('img/banana.jpg', 'banana');
new Img ('img/bathroom.jpg', 'bathroom');
new Img ('img/boots.jpg', 'boots');
new Img ('img/breakfast.jpg', 'breakfast');
new Img ('img/bubblegum.jpg', 'bubblegum');
new Img ('img/chair.jpg', 'chair');
new Img ('img/cthulhu.jpg', 'cthulhu');
new Img ('img/dog-duck.jpg', 'dog-duck');
new Img ('img/dragon.jpg', 'dragon');
new Img ('img/pen.jpg', 'pen');
new Img ('img/pet-sweep.jpg', 'pet-sweep');
new Img ('img/scissors.jpg', 'scissors');
new Img ('img/shark.jpg', 'shark');
new Img ('img/sweep.png', 'sweep');
new Img ('img/tauntaun.jpg', 'tauntaun');
new Img ('img/unicorn.jpg', 'unicorn');
new Img ('img/usb.gif', 'usb');
new Img ('img/water-can.jpg', 'water-can');
new Img ('img/wine-glass.jpg', 'wine-glass');




function randomImg(){
    var randomNum1 = Math.floor(Math.random() * Img.allProducts.length);
    var randomNum2 = Math.floor(Math.random() * Img.allProducts.length);
    var randomNum3 = Math.floor(Math.random() * Img.allProducts.length);
        while(randomNum2 === randomNum1){
            randomNum2 = Math.floor(Math.random() * Img.allProducts.length);
        }
        while(randomNum3 === randomNum1 || randomNum3 === randomNum2){
            randomNum3 = Math.floor(Math.random() * Img.allProducts.length);
        }
    
    imgElement1.src = Img.allProducts[randomNum1].filepath;
    imgElement1.alt = Img.allProducts[randomNum1].imgName;
    imgElement1.index = randomNum1;
    Img.allProducts[randomNum1].views += 1;
    


    imgElement2.src = Img.allProducts[randomNum2].filepath;
    imgElement2.alt = Img.allProducts[randomNum2].imgName;
    imgElement2.index = randomNum2;
    Img.allProducts[randomNum2].views += 1;

    imgElement3.src = Img.allProducts[randomNum3].filepath;
    imgElement3.alt = Img.allProducts[randomNum3].imgName;
    imgElement3.index = randomNum3;
    Img.allProducts[randomNum3].views += 1;  
}

function getResults(){
    for(var i = 0; i <= Img.allProducts.length-1; i++){
        var results = document.getElementById('results');
        var newText = document.createElement('p');
        newText.textContent = Img.allProducts[i].imgName + " was clicked " + Img.allProducts[i].score + " times, on " + Img.allProducts[i].views + " views.";
        console.log(newText);
        results.appendChild(newText);
    }
}

function nextSet(){
    Img.allProducts[event.target.index].score +=1;
    console.log('socre is');
    console.log(Img.allProducts[event.target.index].score)
    console.log("clicks");
    totalClicks +=1;
    console.log(totalClicks);
    if(totalClicks < 26){
    randomImg();
    }else{
        getResults();
    }
}

// event listener
    imgElement1.addEventListener('click', nextSet);
    imgElement2.addEventListener('click', nextSet);
    imgElement3.addEventListener('click', nextSet);

randomImg();