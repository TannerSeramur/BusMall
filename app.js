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
    Img.allProducts[randomNum1].views += 1;
    var pic1 = imgElement1;
    


    imgElement2.src = Img.allProducts[randomNum2].filepath;
    imgElement2.alt = Img.allProducts[randomNum2].imgName;
    Img.allProducts[randomNum2].views += 1;
    var pic2 = imgElement2;


    imgElement3.src = Img.allProducts[randomNum3].filepath;
    imgElement3.alt = Img.allProducts[randomNum3].imgName;
    Img.allProducts[randomNum3].views += 1;  
    var pic3 = imgElement3;
 

}

console.log(element1);


function getScore(){
    console.log("getting here");
    console.log(event);

    console.log('now here');
    console.log(pic3);


    
}

function nextSet(){
    getScore()
    randomImg();
}


// event listener
imgElement1.addEventListener('click', nextSet);
imgElement2.addEventListener('click', nextSet);
imgElement3.addEventListener('click', nextSet);

console.log('now here');
console.log(imgElement1.Img);

randomImg();