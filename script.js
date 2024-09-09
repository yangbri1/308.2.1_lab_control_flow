// ####################################
// # Lab 308.2.1: Control Flow
// # Brian Yang
// # Submit Github Link to Canvas
// ####################################

/* ------------------ Part 1: Growing Pains ------------------ */

// given information 
let radius = 5; // units: meters 
const PI = 3.1415;
const area = PI * radius * radius; // (area of a circle) units: meters**2
let plant_space = 0.8 // m**2
let sample_size = 20;
let weeks = 2;

// calculates number of plants after nth weeks
let growth_rate = sample_size * 2**weeks;

console.log(`At week ${weeks}, there are ${growth_rate} plants.`);
