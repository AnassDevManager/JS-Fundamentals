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

const arg = process.argv[2];

// Regular expression to check if arg is a valid integer (positive or negative)
if (arg !== undefined && /^-?\d+$/.test(arg)) {
    const num = BigInt(arg);
    console.log("My number is " + num);
} else {
    console.log("Not a number");
}

