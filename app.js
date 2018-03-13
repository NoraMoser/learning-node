console.log('starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

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

var command = process.argv[2];
console.log('command: ', command);
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note')
} else if (command === 'list') {
    console.log('Listing things')
}  else if (command === 'read') {
    console.log('read this')
} else if (command === 'remove') {
    console.log('remove me!')
} else {
    console.log('Command not recognized')
}