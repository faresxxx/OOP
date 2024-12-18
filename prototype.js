function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.Greet = function () {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}
const Person1 = new Person ("John", 30);
Person1.Greet(); 