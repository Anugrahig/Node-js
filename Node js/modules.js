// function sayHello() {

/*
const hello = function () {
  console.log("Hello Good Morning");
};
*/
const hello = {
  name: "John",
  place: "Thrissur",
  greet: function () {
    // console.log("I am " + this.name + " from " + this.place);
    console.log(`I am ${this.name} from ${this.place}`);
  },
  message: function () {
    console.log("Sample Message");
  },
};

module.exports = hello;
