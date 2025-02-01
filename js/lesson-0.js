time = prompt("Enter time", "13:13");

// let time = "13:13";
// let x, y;
// time.includes(":", 2) && time.length >= 4
//     ? ((x = Number(time.slice(0, 2))), (y = Number(time.slice(3))))
//   : ((x = 0), (y = 0));

time.includes(":", 2) && time.length >= 4
  ? ((x = Number(time.slice(0, 2))), (y = Number(time.slice(3))))
  : (x = y = 0);

//
// console.log(x, y);

console.log(`${x} г.${(y && y !== 0 && ` ${y} хв.`) || ""}`);
console.log(`${x} г.${(y && " " + y + " хв.") || ""}`);
console.log(`${x} г.${(!!y && ` ${y} хв.`) || ""}`);
console.log(`${x} г.${y ? ` ${y} хв.` : ""}`);
