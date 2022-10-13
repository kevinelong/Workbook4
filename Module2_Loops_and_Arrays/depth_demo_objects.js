//food calories

let data = {
    "drinks" : {
        "shake" : 1000,
        "coke" : 500,
        "coffee": 25
    },
    "snacks" : {
        "twix" : 700,
        "pretzels" : 400,
        "gum": 200
    }
};

console.log(data.snacks.gum); //so simple!
console.log(data["snacks"]["gum"]); //silly? yes if the strings are "hard-coded" string literals (quoted string)

let outerKey = "snacks";
let innerKey = "gum";
console.log(data[outerKey][innerKey]); // square brackets on object keys let you use variables ("soft-coded"?)
// console.log(data.outerKey.innerKey);

