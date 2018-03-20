var person = {
    name: 'Nora'
};

person.age = 32;

debugger;

person.name = 'Ashley';

console.log(person);

// command line: node inspect playground/debugging.js
// debug> list(numberoflines), or n, or c
// repl gets you where you can check variables by name 

// chrome: on the command line type node --inspect-brk
// in chrome type chrome://inspect/#devices
// click open dedicated DevTools for Node