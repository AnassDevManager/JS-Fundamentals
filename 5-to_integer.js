/*const arg1 = process.argv[2];
let arg2 = process.argv[3];
arg2 = num;
arg1 = "My numbre is: ";
num = parseInt(arg, 10);



if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log(`${arg1} ${arg2}`);
}

*/




/*const arg = process.argv[2];


// Validate integer with optional negative sign
if (typeof arg === "string" && /^-?\d+$/.test(arg)) {
    const num = BigParseInt(arg);
    console.log("My number is " + num);
} else {
    console.log("Not a number");
}

*/

const arg = process.argv[2];
const num = Number(arg);

if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number is " + Math.trunc(num));
}
