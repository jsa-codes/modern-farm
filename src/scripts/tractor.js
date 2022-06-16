import { addPlant } from './field.js';
import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

// This function must accept the year's planting plan as input
export const plantSeeds = (yearlyPlan) => {
  // Example growing plan. Actual plan is bigger.
  // 'row' = ParentArray [
  //        'seeds' = ChildArray
  //        ['Potato', 'Soybean', 'Soybean', 'Corn'],
  //        ['Wheat', 'Corn', 'Wheat', 'Asparagus'],
  //        ['Asparagus', 'Wheat', 'Soybean', 'Corn'],
  //        ['Asparagus', 'Soybean', 'Potato', 'Wheat'],
  //
  // ];

  for (const row of yearlyPlan) {
    for (const seed of row) {
      if (seed === 'Asparagus') {
        addPlant(createAsparagus());
      } else if (seed === 'Soybean') {
        addPlant(createSoybean());
      } else if (seed === 'Corn') {
        addPlant(createCorn());
      } else if (seed === 'Sunflower') {
        addPlant(createSunflower());
      } else if (seed === 'Potato') {
        addPlant(createPotato());
      } else if (seed === 'Wheat') {
        addPlant(createWheat());
      }
    }
  }
};
