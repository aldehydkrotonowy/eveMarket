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

import bombs from "./parts/bombs/bombs";

import standardFrequencyCrystals from "./parts/frequencyCrystals/standardCrystals/standard";
import smallFactionCrystals from "./parts/frequencyCrystals/factionCrystals/small";
import mediumFactionCrystals from "./parts/frequencyCrystals/factionCrystals/medium";
import largeFactionCrystals from "./parts/frequencyCrystals/factionCrystals/large";
import extraLargeFactionCrystals from "./parts/frequencyCrystals/factionCrystals/extraLarge";

import smallAdvPulseLaserCrystals from "./parts/frequencyCrystals/advPulseLaserCrystals/small";
import mediumAdvPulseLaserCrystals from "./parts/frequencyCrystals/advPulseLaserCrystals/medium";
import largeAdvPulseLaserCrystals from "./parts/frequencyCrystals/advPulseLaserCrystals/large";
import extraLargeAdvPulseLaserCrystals from "./parts/frequencyCrystals/advPulseLaserCrystals/extraLarge";

import standardChargesS from "./parts/charges/standard/small";
import standardChargesM from "./parts/charges/standard/medium";
import standardChargesL from "./parts/charges/standard/large";
import standardChargesXL from "./parts/charges/standard/extraLarge";

import factionChargesS from "./parts/charges/faction/small";
import factionChargesM from "./parts/charges/faction/medium";
import factionChargesL from "./parts/charges/faction/large";
import factionChargesXL from "./parts/charges/faction/extraLarge";

import veldspar from "./parts/materials/standardOres/veldspar";
import scordite from "./parts/materials/standardOres/scordite";
import omber from "./parts/materials/standardOres/omber";
import spodumain from "./parts/materials/standardOres/spodumain";
import talassonite from "./parts/materials/standardOres/talassonite";
import rakovene from "./parts/materials/standardOres/rakovene";
import pyroxeres from "./parts/materials/standardOres/pyroxeres";
import plagioclase from "./parts/materials/standardOres/plagioclase";
import merkoxite from "./parts/materials/standardOres/merkoxite";
import kernite from "./parts/materials/standardOres/kernite";
import jaspet from "./parts/materials/standardOres/jaspet";
import hemorphite from "./parts/materials/standardOres/hemorphite";
import hedbergite from "./parts/materials/standardOres/hedbergite";
import gneiss from "./parts/materials/standardOres/gneiss";
import darkOchre from "./parts/materials/standardOres/darkOchre";
import crokite from "./parts/materials/standardOres/crokite";
import bistot from "./parts/materials/standardOres/bistot";
import bezdnazine from "./parts/materials/standardOres/bezdnazine";
import arkonor from "./parts/materials/standardOres/arkonor";

const inventoryList = {
  "faction hybrid charges S": {
    profitThreshold: 1000000,
    itemVolume: 0.0025,
    list: [...factionChargesS],
  },
  "faction hybrid charges M": {
    profitThreshold: 1000000,
    itemVolume: 0.0125,
    list: [...factionChargesM],
  },
  "faction hybrid charges L": {
    profitThreshold: 1000000,
    itemVolume: 0.025,
    list: [...factionChargesL],
  },
  "faction hybrid charges XL": {
    profitThreshold: 1000000,
    itemVolume: 0.125,
    list: [...factionChargesXL],
  },
  "standard hybrid charges S": {
    profitThreshold: 1000000,
    itemVolume: 0.0025,
    list: [...standardChargesS],
  },
  "standard hybrid charges M": {
    profitThreshold: 1000000,
    itemVolume: 0.0125,
    list: [...standardChargesM],
  },
  "standard hybrid charges L": {
    profitThreshold: 1000000,
    itemVolume: 0.025,
    list: [...standardChargesL],
  },
  "standard hybrid charges XL": {
    profitThreshold: 1000000,
    itemVolume: 0.125,
    list: [...standardChargesXL],
  },
  "autotargeting missiles": {
    profitThreshold: 0,
    itemVolume: 0.05,
    list: [...standartAutotargetingMissiles, ...fractionAutoTargetingMissiles],
  },
  "cruise missile": {
    profitThreshold: 0,
    itemVolume: 0.05,
    list: [
      ...advHighDmgCruiseMissiles,
      ...advHighPrecCruiseMissiles,
      ...fractionCruiseMissiles,
      ...standardCruiseMissiles,
    ],
  },
  "specialized planet mat": {
    profitThreshold: 0,
    itemVolume: 6,
    list: [...specializedPlanetaryMaterials],
  },
  "refined planet mat": {
    profitThreshold: 0,
    itemVolume: 1.5,
    list: [...refinedPlanetaryMaterials],
  },
  "raw planet mat": {
    profitThreshold: 0,
    itemVolume: 0.01,
    list: [...rawPlanetaryMaterials],
  },
  "processed planet mat": {
    profitThreshold: 0,
    itemVolume: 0.38,
    list: [...processedPlanetaryMaterials],
  },
  "advanced planet mat": {
    profitThreshold: 0,
    itemVolume: 100,
    list: [...advancedPlanetaryMaterials],
  },
  bombs: {
    profitThreshold: 0,
    itemVolume: 75,
    list: [...bombs],
  },
  "standard Crystals": {
    profitThreshold: 0,
    itemVolume: 1,
    list: [...standardFrequencyCrystals],
  },

  "small faction crystals": {
    profitThreshold: 0,
    itemVolume: 1,
    list: [...smallFactionCrystals],
  },
  "medium faction crystals": {
    profitThreshold: 0,
    itemVolume: 1,
    list: [...mediumFactionCrystals],
  },
  "large faction crystals": {
    profitThreshold: 0,
    itemVolume: 1,
    list: [...largeFactionCrystals],
  },
  "extra large faction crystals": {
    profitThreshold: 0,
    itemVolume: 1,
    list: [...extraLargeFactionCrystals],
  },
  "adv puls laser cryst": {
    profitThreshold: 0,
    itemVolume: 1,
    list: [
      ...smallAdvPulseLaserCrystals,
      ...mediumAdvPulseLaserCrystals,
      ...largeAdvPulseLaserCrystals,
      ...extraLargeAdvPulseLaserCrystals,
    ],
  },
  veldspar: {
    profitThreshold: 0,
    itemVolume: 0.1,
    list: [...veldspar],
  },
  scordite: {
    profitThreshold: 0,
    itemVolume: 0.15,
    list: [...scordite],
  },
  omber: {
    profitThreshold: 0,
    itemVolume: 0.6,
    list: [...omber],
  },
  spodumain: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...spodumain],
  },
  talassonite: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...talassonite],
  },
  rakovene: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...rakovene],
  },
  pyroxeres: {
    profitThreshold: 0,
    itemVolume: 0.3,
    list: [...pyroxeres],
  },
  plagioclase: {
    profitThreshold: 0,
    itemVolume: 0.35,
    list: [...plagioclase],
  },
  merkoxite: {
    profitThreshold: 0,
    itemVolume: 40,
    list: [...merkoxite],
  },
  kernite: {
    profitThreshold: 0,
    itemVolume: 1.2,
    list: [...kernite],
  },
  jaspet: {
    profitThreshold: 0,
    itemVolume: 2,
    list: [...jaspet],
  },
  hemorphite: {
    profitThreshold: 0,
    itemVolume: 3,
    list: [...hemorphite],
  },
  hedbergite: {
    profitThreshold: 0,
    itemVolume: 3,
    list: [...hedbergite],
  },
  gneiss: {
    profitThreshold: 0,
    itemVolume: 5,
    list: [...gneiss],
  },
  darkOchre: {
    profitThreshold: 0,
    itemVolume: 8,
    list: [...darkOchre],
  },
  crokite: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...crokite],
  },
  bistot: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...bistot],
  },
  bezdnazine: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...bezdnazine],
  },
  arkonor: {
    profitThreshold: 0,
    itemVolume: 16,
    list: [...arkonor],
  },
};

export default inventoryList;
