class Car {
  constructor (brand, model){
    this.brand = brand;
    this.model = model;
  }
  displayDetails(){ 
    console.log(`car brand: ${this.brand} car model: ${this.model}`)
}
}
let mycar = new Car ('Toyota', 'Camry');
mycar.displayDetails();

