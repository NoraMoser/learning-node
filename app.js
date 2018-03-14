console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var user = os.userInfo();
// // console.log(user);

// fs.appendFileSync('greetings.txt', 'Hello' + user.username + '!');
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

// var res = notes.addNote();
// console.log(res);

// var addNumber = notes.add(1, 2);
// console.log(addNumber);

// console.log(_.isString(true));
// console.log(_.isString('Nora'));

// var filteredArray = _.uniq(['Mike', 'Nora', 3, 5, 'Nora', 5, 6, 7, 'Nora']);
// console.log(filteredArray);

const argv = yargs.argv;

var command = process.argv[2];
console.log('command: ', command);
console.log('Process :', process.argv);
console.log('Yargs :', argv);


if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
}  else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized')
}