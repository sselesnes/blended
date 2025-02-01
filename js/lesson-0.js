// let time = "13:13";
// let x, y;
// time.includes(":", 2) && time.length >= 4
//     ? ((x = Number(time.slice(0, 2))), (y = Number(time.slice(3))))
//   : ((x = 0), (y = 0));

// time.includes(":", 2) && time.length >= 4
//   ? ((x = Number(time.slice(0, 2))), (y = Number(time.slice(3))))
//   : (x = y = 0);

// console.log(`${x} г.${(y && y !== 0 && ` ${y} хв.`) || ""}`);
// console.log(`${x} г.${(y && " " + y + " хв.") || ""}`);
// console.log(`${x} г.${(!!y && ` ${y} хв.`) || ""}`);
// console.log(`${x} г.${y ? ` ${y} хв.` : ""}`);

// t = prompt("Enter time", "13:13");
// n =
//   t.includes(":", 2) && t.length >= 4
//     ? [Number(t.slice(0, 2)), Number(t.slice(3))]
//     : [0, 0];
// console.log(t, n);

// console.log(`${n[0]} г.${(n[1] && n[1] !== 0 && ` ${n[1]} хв.`) || ""}`);
// console.log(`${n[0]} г.${n[1] ? ` ${n[1]} хв.` : ""}`);

t = prompt("Enter time", "13:13");
n = t.match(/^\d{1,2}:\d{2}$/) ? t.split(":").map(Number) : [0, 0];
console.log(`${n[0]} г.${n[1] ? ` ${n[1]} хв.` : ""}`);
