console.log("Hello World")

function Products(name, Src) {
    this.name =name;
    this.Src= Src;
    this.clicks = 0;
    this.views = 0;
}

let dog = new Products("dogDuck", "./img/dog-duck.jpg");
console.log(dog);