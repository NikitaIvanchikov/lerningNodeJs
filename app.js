const arg = process.argv;
// console.log(arg[2])
const a = +arg[2];
const b = +arg[3];
console.log(typeof a)

// if (a > b) {
// 	console.log(a);
// } else {
// 	console.log(b);
// }

let c = (a > b) ? a : b;
console.log(c);

let out = '';
for (let i = 10; i >= 0; i--) {
	out += i + ' ';
}
console.log(out);

let d = [1,4,8]

let e = d.map ( elem => {
	return elem*5
})
console.log(e)

const f = {
	one :44,
	two : 'hello'
}
console.log(f)