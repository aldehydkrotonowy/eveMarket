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

import minerals from "./parts/materials/processed/minerals";

import EMResistanceAmplifiers from "./parts/shipEquipment/shields/EMResistanceAmplifiers";
import explosiveResistanceAmplifiers from "./parts/shipEquipment/shields/explosiveResistanceAmplifiers";
import kineticResistanceAmplifiers from "./parts/shipEquipment/shields/kineticResistanceAmplifiers";
import thermalResistanceAmplifiers from "./parts/shipEquipment/shields/thermalResistanceAmplifiers";
import rechargers from "./parts/shipEquipment/shields/rechargers";

const inventoryList = {
  "faction hybrid charges S": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.0025,
    list: [...factionChargesS],
  },
  "faction hybrid charges M": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.0125,
    list: [...factionChargesM],
  },
  "faction hybrid charges L": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.025,
    list: [...factionChargesL],
  },
  "faction hybrid charges XL": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.125,
    list: [...factionChargesXL],
  },
  "standard hybrid charges S": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.0025,
    list: [...standardChargesS],
  },
  "standard hybrid charges M": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.0125,
    list: [...standardChargesM],
  },
  "standard hybrid charges L": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.025,
    list: [...standardChargesL],
  },
  "standard hybrid charges XL": {
    type: "item",
    profitThreshold: 1000000,
    itemVolume: 0.125,
    list: [...standardChargesXL],
  },
  "autotargeting missiles": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 0.05,
    list: [...standartAutotargetingMissiles, ...fractionAutoTargetingMissiles],
  },
  "cruise missile": {
    type: "item",
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
    type: "item planetary",
    profitThreshold: 0,
    itemVolume: 6,
    list: [...specializedPlanetaryMaterials],
  },
  "refined planet mat": {
    type: "item planetary",
    profitThreshold: 0,
    itemVolume: 1.5,
    list: [...refinedPlanetaryMaterials],
  },
  "raw planet mat": {
    type: "item planetary",
    profitThreshold: 0,
    itemVolume: 0.01,
    list: [...rawPlanetaryMaterials],
  },
  "processed planet mat": {
    type: "item planetary",
    profitThreshold: 0,
    itemVolume: 0.38,
    list: [...processedPlanetaryMaterials],
  },
  "advanced planet mat": {
    type: "item planetary",
    profitThreshold: 0,
    itemVolume: 100,
    list: [...advancedPlanetaryMaterials],
  },
  bombs: {
    type: "item",
    profitThreshold: 0,
    itemVolume: 75,
    list: [...bombs],
  },
  "standard Crystals": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...standardFrequencyCrystals],
  },

  "small faction crystals": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...smallFactionCrystals],
  },
  "medium faction crystals": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...mediumFactionCrystals],
  },
  "large faction crystals": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...largeFactionCrystals],
  },
  "extra large faction crystals": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...extraLargeFactionCrystals],
  },
  "adv puls laser cryst": {
    type: "item",
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
    type: "ore",
    profitThreshold: 0,
    itemVolume: 0.1,
    list: [...veldspar],
  },
  scordite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 0.15,
    list: [...scordite],
  },
  omber: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 0.6,
    list: [...omber],
  },
  spodumain: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...spodumain],
  },
  talassonite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...talassonite],
  },
  rakovene: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...rakovene],
  },
  pyroxeres: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 0.3,
    list: [...pyroxeres],
  },
  plagioclase: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 0.35,
    list: [...plagioclase],
  },
  merkoxite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 40,
    list: [...merkoxite],
  },
  kernite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 1.2,
    list: [...kernite],
  },
  jaspet: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 2,
    list: [...jaspet],
  },
  hemorphite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 3,
    list: [...hemorphite],
  },
  hedbergite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 3,
    list: [...hedbergite],
  },
  gneiss: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 5,
    list: [...gneiss],
  },
  darkOchre: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 8,
    list: [...darkOchre],
  },
  crokite: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...crokite],
  },
  bistot: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...bistot],
  },
  bezdnazine: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...bezdnazine],
  },
  arkonor: {
    type: "ore",
    profitThreshold: 0,
    itemVolume: 16,
    list: [...arkonor],
  },
  minerals: {
    type: "mineral",
    profitThreshold: 0,
    itemVolume: 0.01,
    list: [...minerals],
  },
  "EM shild resistance": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...EMResistanceAmplifiers],
  },
  "kinetic shild resistance": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...kineticResistanceAmplifiers],
  },
  "explosive shild resistance": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...explosiveResistanceAmplifiers],
  },
  "thermal shild resistance": {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...thermalResistanceAmplifiers],
  },
  rechargers: {
    type: "item",
    profitThreshold: 0,
    itemVolume: 1,
    list: [...rechargers],
  },
};

export default inventoryList;
