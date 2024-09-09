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


