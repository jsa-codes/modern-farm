// STEP 1) Create a <main> element in your index.html file.
//    Make sure the element has a class of "container"

// STEP 2) Create a a scripts/catalog.js module
// STEP 3) Define and Export a catalog function

// STEP 4) The catalog function should accept the harvested food array as input
export const catalog = (harvestedPlantsArray) => {
  let harvestHTML = '';

  // STEP 5) Iterate the harvested food array
  for (const plant of harvestedPlantsArray) {
    // STEP 6) With each iteration the <main> needs to have its inner HTML appended with an HTML representation of a food item, ie. - "potato"
    harvestHTML += `<section class="plants">${plant.type}</section>`;
  }

  return harvestHTML;
};
