// STEP 1) Create the scripts/field.js module.
// STEP 2) Create empty array that will store ALL plants growing in field.

// (DO NOT EXPORT THIS ARRAY!!!!)
const plantsGrowingInField = [];

// STEP 3)
// Define and Export a function called addPlant.
// It accepts as its Input a Seed Object.
// It Pushes that seed object into the empty array plantsGrowingInField,
export const addPlant = (maybeArrayOfSeeds) => {
  // This function needs to ALSO CHECK IF THE ARGUMENT BEING PASSED IN IS AN ARRAY.
  //    This is due to "corn" being an array of (2) objects.
  //    We need to check to see IF this is true, or not.
  //          Array.isArray is a "Method"
  if (Array.isArray(maybeArrayOfSeeds)) {
    for (const seed of maybeArrayOfSeeds) {
      plantsGrowingInField.push(seed);
    }
  } else {
    // For ALL other seed objects that are not an array...push to the empty array declared above.
    plantsGrowingInField.push(maybeArrayOfSeeds);
  }
};

// STEP 5) Define and Export a function called usePlants.
// This function should RETURN a COPY of the array of plantsGrowingInField.
export const usePlants = () => {
  return plantsGrowingInField.map((plants) => ({ ...plants }));
};
