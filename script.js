// ####################################
// # Lab 308.2.1: Control Flow
// # Brian Yang
// # Submit Github Link to Canvas
// ####################################


/* ------------------ Part 1: Growing Pains ------------------ */


// given information 
let radius = 5; // units: meters 
const PI = 3.1415;
const total_area = PI * radius * radius; // (area of a circle) units: meters**2
let plant_area = 0.8 // m**2
let sample_size = 20;
let weeks;

// calculates number of plants after nth weeks
let plant_count = sample_size * 2**weeks;

// calculates maximum number of plants that could fit on the alloted area
let max_capacity = Math.floor(total_area / plant_area);
console.log(`Max capacity for plants: `, max_capacity);

// calculates occupied areas by plants
let space_taken = plant_count * plant_area;

// console.log() out total available space for the plants
console.log(`Area of sample size`, total_area);

// calculates remaining space
let space_remaining = total_area - space_taken;

// calculates how many plants it would take to fill up 80% and 50% of the total area
eighty_capacity = Math.floor(max_capacity * 0.8);
fifty_capacity = Math.floor(max_capacity * 0.5);
console.log(`80% capacity: ${eighty_capacity} \n50% capacity: ${fifty_capacity} \n`);


// Week 1 Results:
// declare variables for later use and computing equations
weeks = 1;
plant_count = sample_size * 2**weeks;
space_taken = plant_count * plant_area;
space_remaining = total_area - space_taken;
let action;

// console.log() print block
console.log(`------ After Week 1 Results ------`);
console.log(`number of plants: ${plant_count} plants.`);
console.log(`space taken: ${space_taken} meters^2.`);
console.log(`space remaining: ${space_remaining} meters^2.`);

// list of conditional statements to find best course of action for the flowers
if(plant_count > eighty_capacity){     // "Pruned" above 80% capacity
    action = "Pruned";
}
else if(plant_count > fifty_capacity){ // "Monitored" above 50% capacity
    action = "Monitored";
}
else{                                  // "Planted" otherwise
    action = "Planted";
}

console.log(`action taken: `, action, `\n`);


// Week 2 Results:
weeks = 2;
plant_count = sample_size * 2**weeks;
space_taken = plant_count * plant_area;
space_remaining = total_area - space_taken;

console.log(`------ After Week 2 Results ------`);
console.log(`number of plants: ${plant_count} plants.`);
console.log(`space taken: ${space_taken} meters^2.`);
console.log(`space remaining: ${space_remaining} meters^2.`);

if(plant_count >= eighty_capacity){
    action = "Pruned";
}
else if(plant_count > fifty_capacity){
    action = "Monitored";
}
else{
    action = "Planted";
}

console.log(`action taken: `, action, `\n`);


// Week 3 Results:
weeks = 3;
plant_count = sample_size * 2**weeks;
space_taken = plant_count * plant_area;
space_remaining = total_area - space_taken;

console.log(`------ After Week 3 Results ------`);
console.log(`number of plants: ${plant_count} plants.`);
console.log(`space taken: ${space_taken} meters^2.`);
console.log(`space remaining: ${space_remaining} meters^2.`);


if(plant_count >= eighty_capacity){
    action = "Pruned";
}
else if(plant_count > fifty_capacity){
    action = "Monitored";
}
else{
    action = "Planted";
}

console.log(`action taken: `, action, `\n`);


/* ------------------ Part 2: Thinking Bigger ------------------ */


// given a sample size of 100 plants and 10 weeks to grow ... 
sample_size = 100;
weeks = 10;

// under the same constraints as earlier where ...
// 1) each plant requires a minimum space of 0.8 square meters
// 2) plant count doubles each week -- rate of growth
// 3) within a circular garden

// objective: if the space remained circular, what would be the radius of this expanded garden?

// yields total amount of plants after 10 weeks
plant_count = sample_size * 2**weeks;
// calculates total area taken up by the plants   
space_taken = plant_count * plant_area; 
// console.log(plant_count, space_taken);

// assign the plants' occupied area to new garden area (m^2)
let new_garden_area = space_taken;

// solve for radius in the area of a circle formula to
// calculate radius of the new garden area using the JavaScript built-in square root method
let new_garden_radius = Math.sqrt(new_garden_area / PI);
console.log(`Under the same constraints but with a sample size of 100 plants and 10 weeks,
    the radius of the expanded garden would come out to be ${new_garden_radius} meters.\n`);


/* ------------------ Part 3: Errors in Judgement ------------------ */

// given sample_size = 100 & radius = 5;
/* objective: Use try and catch to wrap your work in an error-handling block. If the amount of space required to
hold the originally provided number of plants exceeds the amount of space available, throw a new
error and log an appropriate message */

console.log(`Area of the original 5-meter-radius garden: `, total_area, `meters^2`);

// calculating the area required to fit in the initial 100 plants ...
weeks = 0;
plant_count = sample_size * 2**weeks;   
space_taken = plant_count * plant_area; 
// console.log(plant_count, space_taken);
console.log(`With a total area of ${total_area} for the 5-meter long garden and the total amount of area
    required to place down 100 plants being ${space_taken} meters^2, it had already far exceeded the limit`);

try{
    if(space_taken < total_area){
        console.log(`Space is not an issue`);
    }
    else{
        throw "Error - Insufficient space in the garden.";
    }
}
catch(error){
    console.log(error);
}