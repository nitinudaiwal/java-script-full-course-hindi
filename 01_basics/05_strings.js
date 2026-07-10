const name = "nitin"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("nitin-U-com")
console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('U'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const newStringOne = "   nitin   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nitin.com/nitin%20udaiwal"


console.log(url.replace('%20','-'));

console.log(url.includes('dddd'))

console.log(gameName.split('-'));





