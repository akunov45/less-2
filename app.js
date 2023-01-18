// {}  new Object()
// []  new Array()
// toUpperCase(), trim(), length, взять последний элемент
// Условные конструкции (if, switch)

// const car = {
// 	model: "Kia",
// 	year: 2015,
// 	doors: 4,
// 	engine: {
// 		sila: 2.5,
// 		year: 2020,
// 		code: "45455KDC",
// 	},
// 	color: "black",
// 	probeg: 50000,
// 	price: 12000,
// 	description: "",
// };

// console.log(car.model);

const names = ["Asan", "YSON", "Kanat"];
//     index     0        1        2       3

console.log("Salam " + names[0].toUpperCase());
console.log(names[1].toLowerCase());
console.log(names[2]);
//                   3 - 1 = 2
console.log(names[names.length - 1]); // last el

console.log(names.length); //4

//  ! string methods
/*
toLowerCase()
toUpperCase()
trim()
trimStart()
trimEnd()
*/

let txt = "     lorem    ww3";
console.log(txt[txt.length - 1], "byl last el"); // 3
console.log(txt.length); // 5 + probel = 14
console.log(txt.trim());

let a = "Jumanji".length;

console.log(a); // 9

// if (true)
// if (false)
// if (color === "green") {
// 	console.log("otosYn");
// } else if (color === "red") {
// 	console.log("stop user");
// } else if (color === "yellow") {
// 	console.log("sen dayardan");
// } else {
// 	console.log("color empty");
// }

let color = "green";
// switch (color) {
// 	case "red":
// 		console.log("stop user");
// 		break;
// 	case "green":
// 		console.log("otosYn");
// 		break;
// 	case "yellow":
// 		console.log("sen dayardan");
// 		break;
// 	default:
// 		console.log("color empty");
// }

const userData = {
	name: "Aidai",
	login: "aidai",
	password: "aidai12",
};

// let log = prompt("enter login");
// let pass = prompt("enter password");
//  true &&  true  and  | и  | жана
//  true ||  false  or  | или  | жe
// if (log === userData.login || pass === userData.password) {
// 	alert("Welcome " + userData.name);
// } else {
// 	alert("Incorrect data login or password");
// }

let size = prompt("enter size");
// XL | L | M
if (size === "XL") {
	console.log("bul razmer bar");
} else {
	console.log("");
}
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }
