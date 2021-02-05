const fs = require('fs');
const path = require('path');


/// lern to read file - task 1
/// way - 1

// fs.readFile('t1.txt', 'utf-8', (err, data) => {
// 	console.log(data);
// });

// /// way - 2

// let text = fs.readFileSync('t2.txt', 'utf-8');
// console.log(text);

// console.log('========================================');

fs.readdir('one', (err, data) => {
	console.log(data);
	data.forEach(file => {
		console.log(file +'\t\t' + path.extname(file) + '\t\t' + fs.statSync('one/' + file).size / 1024 + ' KB');
	});
	
})


fs.writeFile ('one/newFile.txt', 'gooooo\negosejgjse;ejg;js;gj', (err) => {
	if (err) console.log(err);
})