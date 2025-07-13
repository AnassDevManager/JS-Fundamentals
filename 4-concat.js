/*let C;
if (C === undefined) {
    console.log("c c is undefined");
} else if (C === true) {
    console.log("c cool c is cool");
} else {
    console.log("undefined is undefined ");
}
    */

const args = process.argv[2];
if (args === undefined) {
    console.log("undefined is undefined");
} else {
    console.log(args);
}

