var square = (x) => x * x;

console.log(square(4));

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(`Hi. I'm ${user.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi()
user.sayHiAlt("Nora", "is", "awesome")