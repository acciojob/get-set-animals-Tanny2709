// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Dog class
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Cat class
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();      // woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
