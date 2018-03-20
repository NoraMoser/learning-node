// console.log('notes page');
// console.log(module);

// module.exports.age = 32;
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };

// module.exports.add = (a, b) => {
//     return a + b;
// }
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        console.log("you added a new note")
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log("you did not add a new note")
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    var fNotes = fetchNotes();
    var filterNotes = fNotes.filter((note) => note.title !== title);
    saveNotes(filterNotes);

    return fNotes.length !== filterNotes.length;
};

var logNote = (note) => {
    debugger;
    //Break on this line and use repl to output note
    //use read command with title
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};