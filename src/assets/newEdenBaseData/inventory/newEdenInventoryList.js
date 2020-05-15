import charges from "./parts/chargesList";
import standartAutotargetingMissiles from "./parts/missiles/autoTargeting/standartAutotargetingMissiles";
import fractionAutoTargetingMissiles from "./parts/missiles/autoTargeting/fractionAutoTargetingMissiles";

import advHighDmgCruiseMissiles from "./parts/missiles/cruise/advHighDmgCruiseMissiles";
import advHighPrecCruiseMissiles from "./parts/missiles/cruise/advHighPrecCruiseMissiles";
import fractionCruiseMissiles from "./parts/missiles/cruise/fractionCruiseMissiles";
import standardCruiseMissiles from "./parts/missiles/cruise/standardCruiseMissiles";

import specializedPlanetaryMaterials from "./parts/materials/planetary/specializedPlanetaryMaterials";
import refinedPlanetaryMaterials from "./parts/materials/planetary/refinedPlanetaryMaterials";
import rawPlanetaryMaterials from "./parts/materials/planetary/rawPlanetaryMaterials";
import processedPlanetaryMaterials from "./parts/materials/planetary/processedPlanetaryMaterials";
import advancedPlanetaryMaterials from "./parts/materials/planetary/advancedPlanetaryMaterials";

const inventoryList = {
  "hybrid charges": {
    profitThreshold: 1000000,
    list: [...charges],
  },
  "autotargeting missiles": {
    profitThreshold: 0,
    list: [...standartAutotargetingMissiles, ...fractionAutoTargetingMissiles],
  },
  "cruise missile": {
    profitThreshold: 0,
    list: [
      ...advHighDmgCruiseMissiles,
      ...advHighPrecCruiseMissiles,
      ...fractionCruiseMissiles,
      ...standardCruiseMissiles,
    ],
  },
  "specialized planet mat": {
    profitThreshold: 0,
    list: [...specializedPlanetaryMaterials],
  },
  "refined planet mat": {
    profitThreshold: 0,
    list: [...refinedPlanetaryMaterials],
  },
  "raw planet mat": {
    profitThreshold: 0,
    list: [...rawPlanetaryMaterials],
  },
  "processed planet mat": {
    profitThreshold: 0,
    list: [...processedPlanetaryMaterials],
  },
  "advanced planet mat": {
    profitThreshold: 0,
    list: [...advancedPlanetaryMaterials],
  },
};

export default inventoryList;
