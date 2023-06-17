console.log("Hello World")

let img1 = document.getElementById("Product1");
let img2 = document.getElementById("Product2");
let img3 = document.getElementById("Product3");
let img4 = document.getElementById("Product4");
let img5 = document.getElementById("Product5");
let img6 = document.getElementById("Product6");
let img7 = document.getElementById("Product7");
let img8 = document.getElementById("Product8");
let img9 = document.getElementById("Product9");
let img10 = document.getElementById("Product10");
let img11 = document.getElementById("Product11");
let img12 = document.getElementById("Product12");
let img13 = document.getElementById("Product13");
let img14 = document.getElementById("Product14");
let img15 = document.getElementById("Product15");
let img16 = document.getElementById("Product16");
let img17 = document.getElementById("Product17");
let img18 = document.getElementById("Product18");
let img19 = document.getElementById("Product19");



function Product(name, src) {
    this.name = name;
    this.src= src;
    this.clicks = 0;
    this.views = 0;
}

let dog = new Product("dogDuck", "./img/dog-duck.jpg");
let boots = new Product("boots", "./img/boots.jpg");
let banana = new Product("banana", "./img/banana.jpg");
let bag = new Product("bag", "./img/bag.jpg");
let bathroom = new Product("bathroom", "./img/bathroom.jpg");
let breakfast = new Product("breakfast", "./img/breakfast.jpg");
let bubblegum = new Product("bubblegum", "./img/bubblegum.jpg");
let chair = new Product("chair", "./img/chair.jpg");
let cthulhu = new Product("cthulhu", "./img/cthulhu.jpg");
let dragon = new Product("dragon", "./img/dragon.jpg");
let pen = new Product("pen", "./img/pen.jpg");
let pet = new Product("pet", "./img/pet.jpg");
let scissors = new Product("scissors", "./img/scissors.jpg");
let shark = new Product("shark", "./img/shark.jpg");
let sweep = new Product("sweep", "./img/sweep.jpg");
let tauntaun = new Product("tauntaun", "./img/tauntaun.jpg");
let unicorn = new Product("unicorn", "./img/unicorn.jpg");
let water = new Product("water", "./img/water.jpg");
let wine = new Product("wine", "./img/wine.jpg");

let products = [];

products.push(dog);
products.push(boots);
products.push(banana);
products.push(bag);
products.push(bathroom);
products.push(breakfast);
products.push(bubblegum);
products.push(chair);
products.push(cthulhu);
products.push(dragon);
products.push(pen);
products.push(pet);
products.push(scissors);
products.push(shark);
products.push(sweep);
products.push(tauntaun);
products.push(unicorn);
products.push(water);
products.push(wine);

console.log(products);

function setImages(prod1, prod2, prod3) {
    img1.src = prod1.src;
    img1.alt = prod1.name;
    img1.title = prod1.name;
    img2.src = prod2.src;
    img2.alt = prod2.name;
    img2.title = prod2.name;
    img3.src = prod3.src;
    img3.alt = prod3.name;
    img3.title = prod3.name;
    
}

setImages( products[0], products[1], products[2] );



Product(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog, dragon, pen, pet, scissors, 
    shark, sweep, tauntaun, unicorn, water, wine);

function setRandomProducts() {
    let product1Index1 = getRandomItem(productArray.length);
    let product1Index2 = getRandomItem(productArray.length);
    if (product1Index1 === product1Index2) {
        product1Index1 = getRandomItem(productArray.length);
        product1Index2 = getRandomItem(productArray.length);
    }
}
function handleProductClick(event) {
    event.preventDefault();
    let target = event.target;
    let productName = target.alt;

    let favoriteProduct;
    
    for (let i = 0; i , productArray.length; i++) {
        let product = productArray[i];
        if (product.name === productName) {
            favoriteProduct = product;
        }
    }
}
console.log ("favoriteProduct.clicks++");

function renderResults() {
    console.log("clicked");
    for (let i = 0; i < productArray.length; i++) {
        console.log("clicked button");
        votingArea.innerHTML = "";
        let productUL = document.createElement('ul');
        let product = productArray[i];
        let productName = Product.name;
        let productVoteCount = Product.voteCount;
        let report = "the product named ${productName} got ${productVotesCount} votes";
        let productLI = document.createElement("li");
        productLI.textContent = report;
        productUL.appendChild(productLI);
        console.log(report);
    }
    votingArea.appendChild(productUL);
}


let resultsButton = document.getElementById("show-results-button");

const ctx = document.getElementById('my-chart');

const chartObj = {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: '# of Clicks',
                data: [],
            }
        ]
    }
}

chartObj.data.labels = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog", "dragon", "pen", "pet", "scissors", 
"shark", "sweep", "tauntaun", "unicorn", "water", "wine"];

chartObj.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];