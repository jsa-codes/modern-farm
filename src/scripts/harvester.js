// STEP 1) CREATE harvester.js module

// STEP 2) Define and Export a harvestPlants function
// STEP 3) Must accept the plants array as input
export const harvestPlants = (growingPlantsArray) => {
  // STEP 4) It will return an array of seed objects
  const arrayOfSeedObjects = [];

  //   STEP 5) Iterate the array of growing plants
  growingPlantsArray.forEach((plant) => {
    // On each plant get the value of the output "property"
    //      Need to store the result of the output in a variable
    //      It will hold the output value each time we iterate the array
    let output = plant.output;
    // STEP 7) IF the plant is corn then divide the output in half
    if (plant.type === 'Corn') {
      output /= 2;
    }
    // STEP 6)
    for (let i = 0; i < output; i++) {
      arrayOfSeedObjects.push(plant);
    }
  });
  return arrayOfSeedObjects;
};
