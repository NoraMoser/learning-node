// console.log('starting app');

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
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = process.argv[2];
console.log('command: ', command);
console.log('Process :', process.argv);
console.log('Yargs :', argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('way to fucking go.')
        notes.logNote(note);
    } else {
        console.log ('no');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}  else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('you can read!');
        notes.logNote(note);
    } else {
        console.log('no, man.'); 
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note was not removed';
    console.log(message);
} else {
    console.log('Command not recognized')
}