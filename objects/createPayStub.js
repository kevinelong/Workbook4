// USE A FUNCTION TO CREATE AN OBJECT

// like a construcor it builds an object from parts
function createPayStub(id, name, payRate) {
    // { creates an object "literal" (value without a name)
    return { id: id, name: name, payRate: payRate };//OBJECT 
}
let output = createPayStub(123, "kevin", 100.00);
console.log(output.name + " gets " + output.payRate);


// LOOPS

let limit = 0;
let start = 10;

while (start > limit) { // REPEAT IF TRUE t/f boolean logical expression
    //HAPPENS 0 or more times
    console.log("COUNTDOWN: " + start);
    start--; //decrement - decrease by 1  
} //loop back up to line 4 the "while" re-evaluate

//fall out of loop when while expression is false
console.log("BLAST OFF!");

//do while
let num = 1;
let i = 1; //START AT 1
do { //REPEAT AT LEAST ONCE
    //GUARANTEED TO HAPPEN ONCE
    num = num * 2; //DOUBLE THE VALUE
    console.log("DO:", i, num); //DISPLAY NUM
    i++; //INCREMENT - COUNT UP
} while (i < 5)

//WE CAN DO THE SAME THING IN FEWER LINES OF CODE WITH A FOR LOOP
let value = 1;

for (let i = 1; i < 5; i++) { //
    value = value * 2; //DOUBLE EVERY TIME
    console.log("WHILE VALUE:", i, value);
}


//BREAKING OUT  IN THE MIDDLE
let n = 1;
let index = 1;
while (index < 100) {
    n = n * 2; //DOUBLE IT UP
    // n *= 2; // ALTERNATE - DOUBLE IT UP
    console.log("BREAK ME: " + index, n)
    if (n >= 100) { // the doubling number
        break; //BREAK OUT NOW!!!
    }
    index++;
}
console.log("BROKEN OUT! (before index reaches 100")
