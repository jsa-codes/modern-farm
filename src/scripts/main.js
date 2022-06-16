import { createPlan } from './plan.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';

console.log('Welcome to the main module');

// Create Plan - (plan.js)
// Call the createPlan function, store the result of that function in a variable "yearlyPlan"
const yearlyPlan = createPlan();
console.log(yearlyPlan);

// Plant Seeds - (🚜 tractor.js)
plantSeeds(yearlyPlan);

// * Use Plants & Add Plants- (field.js)
const plantedSeeds = usePlants();

// Harvest Plants - (from harvester.js)
const harvestedPlants = harvestPlants(plantedSeeds);
console.log(harvestedPlants);

// Catalog Plants - (catalog.js)
catalog(harvestedPlants);

// Render Catalog in the Browser
const parentHTML = document.querySelector('.container');
parentHTML.innerHTML = catalog(harvestedPlants);

/* 
TEST LOGIC FOR SEEDS PRODUCING MODULE 
*/
// import { createAsparagus } from './seeds/asparagus.js';
// const asparagusSeed = createAsparagus();
// console.log(asparagusSeed);

// import { createSunflower } from './seeds/sunflower.js';
// const sunflowerSeed = createSunflower();
// console.log(sunflowerSeed);

// import { createWheat } from './seeds/wheat.js';
// const wheatSeed = createWheat();
// console.log(wheatSeed);

// import { createPotato } from './seeds/potato.js';
// const potatoSeed = createPotato();
// console.log(potatoSeed);

// import { createSoybean } from './seeds/soybean.js';
// const soybeanSeed = createSoybean();
// console.log(soybeanSeed);

// import { createCorn } from './seeds/corn.js';
// const cornSeed = createCorn();
// console.log(cornSeed);

// Checking Logic on Newly Created Object

// const celery = {
//   type: 'Celery',
//   height: 15,
// };

// const addCelery = addPlant(celery);
// const useCelery = usePlants(addCelery);
// console.log(useCelery);
