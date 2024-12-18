class Animal {
    constructor(name) {
        this.name = name;
}
speak() {
    console.log(`${this.name} makes a sound.`);
}
}
 class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
 }
 speak() {
    console.log(`${this.name} barks.`);
 }
}
const dog1 = new Dog ('max', 'golden retriever');
dog1.speak()
