const arg1 = process.argv[2];
const arg2 = parseInt(process.argv[3]);
arg1 = "My number ";

if (arg2 === undefined) {
    console.log("Not a number");
} else if (arg2 === NaN) {
    console.log("Not a number");
} else {

    console.log(`${arg1} is ${arg2}`);
}
