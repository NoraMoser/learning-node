console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
// // console.log(user);

// fs.appendFileSync('greetings.txt', 'Hello' + user.username + '!');
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

var res = notes.addNote();
console.log(res);

var addNumber = notes.add(1, 2);
console.log(addNumber);