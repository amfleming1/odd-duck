'use strict';

let votingArea = document.getElementById("voting-area");
let resultsArea = doucment.getElementbyId("results-area");

let Product1Img = document.getElementbyId("Product1");
let Product2Img = document.getElelmentbyId("Product2");
let Product3Img = document.getElementbyId("Product3");

//products constructor
function Products(name, Src) {
    this.name =name;
    this.Src= Src;
    this.clicks = 0;
    this.views = 0;
}

let dog = new Products("dogDuck", "./img/dog-duck.jpg");
let boots = new Products("boots", "./img/boots.jpg");
let banana = new Products("banana", "./img/banana.jpg");
let bag = new Products("bag", "./img/bag.jpg");
let bathroom = new Products("bathroom", "./img/bathroom.jpg");
let breakfast = new Products("breakfast", "./img/breakfast.jpg");
let bubblegum = new Products("bubblegum", "./img/bubblegum.jpg");
let chair = new Products("chair", "./img/chair.jpg");
let cthulhu = new Products("cthulhu", "./img/cthulhu.jpg");
let dragon = new Products("dragon", "./img/dragon.jpg");
let pen = new Products("pen", "./img/pen.jpg");
let pet = new Products("pet", "./img/pet.jpg");
let scissors = new Products("scissors", "./img/scissors.jpg");
let shark = new Products("shark", "./img/shark.jpg");
let sweep = new Products("sweep", "./img/sweep.jpg");
let tauntaun = new Products("tauntaun", "./img/tauntaun.jpg");
let unicorn = new Products("unicorn", "./img/unicorn.jpg");
let water = new Products("water", "./img/water.jpg");
let wine = new Products("wine", "./img/wine.jpg");

//letProductList =[dogDuck, boots, banana]

let productArray = [];

productArray.push(dog);
productArray.push(boots);
productArray.push(banana);
productArray.push(bag);
productArray.push(bathroom);
productArray.push(breakfast);
productArray.push(bubblegum);
productArray.push(chair);
productArray.push(cthulhu);
productArray.push(dragon);
productArray.push(pen);
productArray.push(pet);
productArray.push(scissors);
productArray.push(shark);
productArray.push(sweep);
productArray.push(tauntaun);
productArray.push(unicorn);
productArray.push(water);
productArray.push(wine);

function setProductImages(Product1, Product2, Product3) {

    Product1Img.Src = Product1.ImgSrc;
    Product1Img.alt = Product1.name;
    Product1Img.title = Product1.name;
   Product2Img.Src = Product2.imgSrc
    Product2Img.alt = Product2.name;
   Product2Img.title = Product2.name;
    Product3Img.Src = Product3.ImgSrc; 
    Product3Img.alt = Product3.name;
    Product3Img.title = Product3.name;
}
    setProductImages(productArray[0], productArray[1], productArray[3]);

function handleProductClick(event) {
console.log("clicked:)");
event.preventDefault();
let target = event.target;
let productName = target.alt;
console.log(productName);

 let theBestProduct;
 for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i];
    if (product.name === target.alt) {
        theBestProduct = product;
    
    }
 }
theBestProduct.voteCount++;
console.log(theBestProduct.voteCount);

votingArea.addEventListener("click", handleProductClick);

function renderResults () {
    resultsArea.innerHTML ="";
    let productUL = document.createElement("ul");
    for (let i = 0; i <productArray.length; i++) {
        let product =productArray[i];
        let productName = product.name;
        let productVoteCount = product.voteCount;
        let report =`${productName} had ${productVoteCount} votes.`;
        let productLI= document.createElement("li");
        productLI.textcontent = report;
        productUL.appendChild(productLI);
    }
    resultsArea.appendChild(productUL);
    
}
 let showResultsButton = document.getElementbyId("show-results-button");
 showResultsButton.addEventListener("click", renderResults);
