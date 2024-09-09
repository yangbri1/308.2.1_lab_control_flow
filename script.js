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

// calculates maximum capacity of the alloted space
let max_capacity = total_area / plant_area;
console.log(`Max amount of plants`, max_capacity);
// calculates occupied areas by plants
let space_taken = plant_count * plant_area;

// console.log() out total available space for the plants
console.log(`Area of sample size`, total_area);

eighty_capacity = max_capacity * 0.8;
fifty_capacity = max_capacity * 0.5;

console.log(eighty_capacity, fifty_capacity);

// Week 1 Results:
weeks = 1;
plant_count = sample_size * 2**weeks;
space_taken = plant_count * plant_area;
console.log(`Week 1 Results:`);
console.log(`${plant_count} plants.`);
console.log(space_taken);


