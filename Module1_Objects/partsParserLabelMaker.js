//EXERCISE 1 PAGE 1-9 - Print Adress Object AKA label_maker.js
function printContact(address) {
    console.log(address.name);
    console.log(address.address);
    console.log(address.city + ",", address.state, address.zip);
}
//TEST
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Atlanta",
    state: "GA",
    zip: "30083"
};

printContact(myInfo);

//EXERCISE 1 PAGE 1-9 -  AKA product_code.js

function parsePartCode(text) {
    return {
        supplierCode: text.slice(0, text.indexOf(":")),
        productNumber: text.slice(text.indexOf(":") + 1, text.indexOf("-")),
        size: text.slice(text.indexOf("-") + 1)
    }
}
//TEST
let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
    " Product Number: " + part1.productNumber +
    " Size: " + part1.size);
