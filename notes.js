console.log('notes page');
// console.log(module);

// module.exports.age = 32;
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// };

// module.exports.add = (a, b) => {
//     return a + b;
// }

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};