let fruit = ["apple", "banana", "cherry"]; //simple one dimensional linear list
console.log(fruit[0]);
/*
How could we represent rows and columns - a two dimensional grid
tic-tac-toe:
X . O
. X .
. . O
*/
let data = [ //start rows list
    ["X", ".", "O"], //first row - index zero
    [".", "X", "."],
    [".", ".", "O"],
];//end outer rows list
console.log(data[2][2])

//Loop through rows
for (r = 0; r < data.length; r++) { // r++ same as r = r + 1
    let output = ""; //create output string for a single row
    for (c = 0; c < data[r].length; c++) {
        output += data[r][c]; // add individual letter/value to row
        output += " "; // add space for padding to make it more like a square grid
    }
    console.log(output); // print single finished row + new line
}

//we could go further into 3 dimensions like mincraft voxel - matrix

// let menu = {
//     drinks: [
//         "Water",
//         "Tea",
//         "Sweet Tea",
//         "Coke",
//         "Dr. Pepper",
//         "Sprite"
//     ],
//     entrees: [
//         "Hamburger w/ Fries",
//         "Grilled Cheese w/ Tater Tots",
//         "Grilled Chicken w/ Veggies",
//         "Chicken Fried Steak w/ Mashed Potatoes",
//         "Fried Shrimp w/ Coleslaw",
//         "Veggie Plate"
//     ],
//     desserts: [
//         "Cheesecake",
//         "Chocolate Cake",
//         "Snickerdoodle Cookie"
//     ]
// };
// console.log(menu.desserts[0]);