var person = {
  firstName :"Penelope",
  lastName :"Barrymore",
  showFullName: () => {
    console.log (this.firstName + " " + this.lastName);
  }
};

var anotherPerson = {
  firstName :"Rohit",
  lastName :"Khan"
};

person.showFullName(anotherPerson);
person.showFullName.call(anotherPerson);
person.showFullName.apply(anotherPerson);
// person.showFullName.bind(anotherPerson);
