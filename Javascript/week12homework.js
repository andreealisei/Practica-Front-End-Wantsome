  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

 /* var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };
  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };
  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };
    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };
*/

  // The Car and the Truck class have similar behavior and properties.
  // Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
      this.prototype = new Vehicle(driver);
  };
  Car.prototype = new Vehicle();

  var Truck = function(driver) {
    this.prototype = new Vehicle(driver);
    this.cargo = [];
    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };
    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };
Truck.prototype = new Vehicle();

const newTruck = new Truck("Ovidiu");
const newCar = new Car("Lucian");

var Person = function() {
	this.smth = 0;
};


/*2 //Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]*/
var Person = function() {
	this.smth = 0;
};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

const Trainer = function(subject) {
/* this.prototype = new Person(); */ // used for passing parameters to parent class constructor
  this.subject = subject;

	this.teach = () => {
  	console.log(`${this.name} is now teaching ${this.subject}`);
  }
}

Trainer.prototype = new Person();

const lucian = new Trainer("javascript");
lucian.initialize("Lucian", 29);
lucian.teach();

// saptamana 12 / ex de miercuri 

//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva
 
class Person {
    
  constructor (firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  }


displayPersonName(){
  console.log(`${this.firstName} ${this.lastName}`);
}
}
let another = new Person ("Aurel", "Gasca")
another.displayPersonName()

//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 
class Animal {
  constructor(name,weight) {
      this.name = name;
      this.weight = weight;
  }
  eatFood (){
      console.log (`${this.name} is eating`);
  }
  sleep (){
      console.log (`${this.name} is sleeping`);
  }
  weakingUp (){
      console.log (`${this.name} is weakingUp`);
  }
} 
/*let one = new Animal ("lion")
one.sleep ()*/
class noua extends Animal{
  constructor(name,weight) {
      super(name,weight)
  }
  walking () {
      console.log (`${this.name} is walking`);
  }
  range() {
      console.log (`${this.name} is ranging`);
  }
  showBehaviour () {
      console.log (`${this.eatFood} ${this.range}`);
  }
  dailyRoutine () {
      console.log (`${this.weakingUp()} ${this.range()} ${this.eatFood()} ${this.sleep()}`);
  }

}
let Dog = new noua("hamham", "ham");
Dog.dailyRoutine();