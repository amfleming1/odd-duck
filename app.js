'use strict';

let votingArea = document.getElementById("voting-area");
let resultsArea = doucment.getElementbyId("results-area");

let dogDuckImg = document.getElementbyId("Product1");
let bootsImg = document.getElelmentbyId("Product2");
let bananaImg = document.getElementbyId("Product3");

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

//letProductList =[dogDuck, boots, banana]

let productArray = [];

productArray.push(dogDuck);
productArray.push(boots);
productArray.push(banana);

function setProductImages(dogDuck, boots, banana) {

    dogDuckImg.Src = dogDuck.ImgSrc;
    dogDuckImg.alt = dogDuck.name;
    dogDuckImg.title = dogDuck.name;
    bootsImg.Src = boots.imgSrc
    bootsImg.alt = boots.name;
    bootsImg.title = boots.name;
    bananaImg.Src = banana.ImgSrc; 
    bananaImg.alt = banana.name;
    bananaImg.title = banana.name;
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
