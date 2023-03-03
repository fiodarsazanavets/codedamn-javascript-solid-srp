const FileProcessor = require('./fileProcessor.js');
const TextProcessor = require('./textProcessor.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var path = 'data.txt';

var fileProcessor = new FileProcessor(path);
var textProcessor = new TextProcessor(fileProcessor);
textProcessor.convertText();