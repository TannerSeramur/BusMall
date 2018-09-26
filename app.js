'use strict'

// get dom of image
var imgElement1 = document.getElementById('img1');
var imgElement2 = document.getElementById('img2');
var imgElement3 = document.getElementById('img3');
// dom of chart
var ctx = document.getElementById("myChart");

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
new Img ('img/bag.jpg', 'Bag');
new Img ('img/banana.jpg', 'Banana');
new Img ('img/bathroom.jpg', 'Bathroom');
new Img ('img/boots.jpg', 'Boots');
new Img ('img/breakfast.jpg', 'Breakfast');
new Img ('img/bubblegum.jpg', 'Bubblegum');
new Img ('img/chair.jpg', 'Chair');
new Img ('img/cthulhu.jpg', 'Cthulhu');
new Img ('img/dog-duck.jpg', 'Dog-duck');
new Img ('img/dragon.jpg', 'Dragon');
new Img ('img/pen.jpg', 'Pen');
new Img ('img/pet-sweep.jpg', 'Pet-sweep');
new Img ('img/scissors.jpg', 'Scissors');
new Img ('img/shark.jpg', 'Shark');
new Img ('img/sweep.png', 'Sweep');
new Img ('img/tauntaun.jpg', 'Tauntaun');
new Img ('img/unicorn.jpg', 'Unicorn');
new Img ('img/usb.gif', 'Usb');
new Img ('img/water-can.jpg', 'Water-can');
new Img ('img/wine-glass.jpg', 'Wine-glass');



// function that makes random different images
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
        var newText = document.createElement('li');
        newText.textContent = Img.allProducts[i].imgName + ": " + Img.allProducts[i].score + " Votes, " + Img.allProducts[i].views + " views.";
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
    if(totalClicks <= 25){
        imgElement1.classList.add('opacity')
        imgElement2.classList.add('opacity')
        imgElement3.classList.add('opacity')
        randomImg();
        setTimeout(function(){
        imgElement1.classList.remove('opacity')
        imgElement2.classList.remove('opacity')
        imgElement3.classList.remove('opacity')
        }, 300);
    }else if(totalClicks < 27){
        getResults();

        // ChartJS starts here
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Bag", "Banana", "Bathroom", "Boots", "Breakfast", "Bubblegum", "Chair", "Cthulhu", "Dog-Duck", "Dragon", "Pen", "Pet Sweep", "Scissors", "Shark", "Sweep", "Tauntaun", "Unicorn", "Usb", "Water Can", "Wine Glass"],
        datasets: [{
            label: '# of Votes',
            data: [Img.allProducts[0].score, Img.allProducts[1].score, Img.allProducts[2].score, Img.allProducts[3].score, Img.allProducts[4].score, Img.allProducts[5].score, Img.allProducts[6].score, Img.allProducts[7].score, Img.allProducts[8].score, Img.allProducts[9].score, Img.allProducts[10].score, Img.allProducts[11].score, Img.allProducts[12].score, Img.allProducts[13].score, Img.allProducts[14].score, Img.allProducts[15].score, Img.allProducts[16].score, Img.allProducts[17].score, Img.allProducts[18].score, Img.allProducts[19].score],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)' ,
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        title:{
            display: true,
            text: 'Results of Survey'
        },
        scales: {
            gridLines:[{
                tickMarkLength: 50
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 1, 
                },
                weight: -20
            }]
        }
    
    }
});
// Chart ends here

    }else{
        console.log('done');
    }
}



// event listener
    imgElement1.addEventListener('click', nextSet);
    imgElement2.addEventListener('click', nextSet);
    imgElement3.addEventListener('click', nextSet);

randomImg();