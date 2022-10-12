//OBJECT DEMO
function printPerson(personObject){ //recieves value and puts it into x
    // `` template strings
  console.log(`${personObject.greeting} my name is ${personObject.name}.`);
}

let specificPerson = { name: "Kevin", greeting: "Howdy", age:55};
printPerson( specificPerson ); //pass the object by value


/*
function printActor(actor){
  console.log("The actors name is: " + actor.name)
}

let bb = { name: "Billy Bob", greeting: "Yo", age:65};

printActor( bb );

  // + CONCATENATION - chaining together
  console.log(person.greeting + " my name is " + person.name + ".");

  
  console.log(person.age)
  //person.age = person.age + 1 // = replace value with expression
  //person.age += 1 // += add the mount we specify
  person.age++;   // ++ increment - Add exactly one
  
  console.log(person.age)
  person.age++;   // ++ Add exactly one
  
  console.log(person.age)
  person.age++;   // ++ Add exactly one
  
  console.log(person.age)
*/