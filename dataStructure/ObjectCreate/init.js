const person = {
    name: "name",
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

person.printIntroduction();
me.printIntroduction();

var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
delete emp1.company
console.log(emp1.company);