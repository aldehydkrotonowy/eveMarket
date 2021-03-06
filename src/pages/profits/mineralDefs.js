import { minerals, SHIP_VOLUMES } from "../../assets/minerals";

const {
  veldsparFamily,
  scorditeFamily,
  omberFamily,
  kerniteFamily,
  plagioclaseFamily,
  pyroxeresFamily,
  gneissFamily,
} = minerals;

export const mineralDefs = {
  [veldsparFamily.normal.veldspar.name]: {
    name: veldsparFamily.normal.veldspar.name,
    priceStep: veldsparFamily.normal.veldspar.priceStep,
    fromBuyPrice: veldsparFamily.normal.veldspar.fromBuyPrice,
    toBuyPrice: veldsparFamily.normal.veldspar.toBuyPrice,
    rowValues: {
      rawminUnitVolume: veldsparFamily.normal.veldspar.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: veldsparFamily.compresssed.veldspar.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: veldsparFamily.compresssed.veldspar.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [veldsparFamily.normal.denseVeldspar.name]: {
    name: veldsparFamily.normal.denseVeldspar.name,
    priceStep: veldsparFamily.normal.denseVeldspar.priceStep,
    fromBuyPrice: veldsparFamily.normal.denseVeldspar.fromBuyPrice,
    toBuyPrice: veldsparFamily.normal.denseVeldspar.toBuyPrice,
    rowValues: {
      rawminUnitVolume: veldsparFamily.normal.denseVeldspar.volume,
      shipVolume: 46200,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: veldsparFamily.compresssed.denseVeldspar.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: veldsparFamily.compresssed.denseVeldspar.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [veldsparFamily.normal.concentratedVeldspar.name]: {
    name: veldsparFamily.normal.concentratedVeldspar.name,
    priceStep: veldsparFamily.normal.concentratedVeldspar.priceStep,
    fromBuyPrice: veldsparFamily.normal.concentratedVeldspar.fromBuyPrice,
    toBuyPrice: veldsparFamily.normal.concentratedVeldspar.toBuyPrice,
    rowValues: {
      rawminUnitVolume: veldsparFamily.normal.concentratedVeldspar.volume,
      shipVolume: 46200,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: veldsparFamily.compresssed.concentratedVeldspar.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice:
        veldsparFamily.compresssed.concentratedVeldspar.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [veldsparFamily.normal.stableVeldspar.name]: {
    name: veldsparFamily.normal.stableVeldspar.name,
    priceStep: veldsparFamily.normal.stableVeldspar.priceStep,
    fromBuyPrice: veldsparFamily.normal.stableVeldspar.fromBuyPrice,
    toBuyPrice: veldsparFamily.normal.stableVeldspar.toBuyPrice,
    rowValues: {
      rawminUnitVolume: veldsparFamily.normal.stableVeldspar.volume,
      shipVolume: 46200,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: veldsparFamily.compresssed.stableVeldspar.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: veldsparFamily.compresssed.stableVeldspar.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [scorditeFamily.normal.scordite.name]: {
    name: scorditeFamily.normal.scordite.name,
    priceStep: scorditeFamily.normal.scordite.priceStep,
    fromBuyPrice: scorditeFamily.normal.scordite.fromBuyPrice,
    toBuyPrice: scorditeFamily.normal.scordite.toBuyPrice,
    rowValues: {
      rawminUnitVolume: scorditeFamily.normal.scordite.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: scorditeFamily.compresssed.scordite.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: scorditeFamily.compresssed.scordite.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [scorditeFamily.normal.condensedScordite.name]: {
    name: scorditeFamily.normal.condensedScordite.name,
    priceStep: scorditeFamily.normal.condensedScordite.priceStep,
    fromBuyPrice: scorditeFamily.normal.condensedScordite.fromBuyPrice,
    toBuyPrice: scorditeFamily.normal.condensedScordite.toBuyPrice,
    rowValues: {
      rawminUnitVolume: scorditeFamily.normal.condensedScordite.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: scorditeFamily.compresssed.condensedScordite.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: scorditeFamily.compresssed.condensedScordite.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [scorditeFamily.normal.massiveScordite.name]: {
    name: scorditeFamily.normal.massiveScordite.name,
    priceStep: scorditeFamily.normal.massiveScordite.priceStep,
    fromBuyPrice: scorditeFamily.normal.massiveScordite.fromBuyPrice,
    toBuyPrice: scorditeFamily.normal.massiveScordite.toBuyPrice,
    rowValues: {
      rawminUnitVolume: scorditeFamily.normal.massiveScordite.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: scorditeFamily.compresssed.massiveScordite.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: scorditeFamily.compresssed.massiveScordite.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [scorditeFamily.normal.glossyScordite.name]: {
    name: scorditeFamily.normal.glossyScordite.name,
    priceStep: scorditeFamily.normal.glossyScordite.priceStep,
    fromBuyPrice: scorditeFamily.normal.glossyScordite.fromBuyPrice,
    toBuyPrice: scorditeFamily.normal.glossyScordite.toBuyPrice,
    rowValues: {
      rawminUnitVolume: scorditeFamily.normal.glossyScordite.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: scorditeFamily.compresssed.glossyScordite.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: scorditeFamily.compresssed.glossyScordite.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [plagioclaseFamily.normal.azurePlagioclase.name]: {
    name: plagioclaseFamily.normal.azurePlagioclase.name,
    priceStep: plagioclaseFamily.normal.azurePlagioclase.priceStep,
    fromBuyPrice: plagioclaseFamily.normal.azurePlagioclase.fromBuyPrice,
    toBuyPrice: plagioclaseFamily.normal.azurePlagioclase.toBuyPrice,
    rowValues: {
      rawminUnitVolume: plagioclaseFamily.normal.azurePlagioclase.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: plagioclaseFamily.compresssed.azurePlagioclase.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice:
        plagioclaseFamily.compresssed.azurePlagioclase.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [omberFamily.normal.goldenOmber.name]: {
    name: omberFamily.normal.goldenOmber.name,
    priceStep: omberFamily.normal.goldenOmber.priceStep,
    fromBuyPrice: omberFamily.normal.goldenOmber.fromBuyPrice,
    toBuyPrice: omberFamily.normal.goldenOmber.toBuyPrice,
    rowValues: {
      rawminUnitVolume: omberFamily.normal.goldenOmber.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: omberFamily.compresssed.goldenOmber.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: omberFamily.compresssed.goldenOmber.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [kerniteFamily.normal.fieryKernite.name]: {
    name: kerniteFamily.normal.fieryKernite.name,
    priceStep: kerniteFamily.normal.fieryKernite.priceStep,
    fromBuyPrice: kerniteFamily.normal.fieryKernite.fromBuyPrice,
    toBuyPrice: kerniteFamily.normal.fieryKernite.toBuyPrice,
    rowValues: {
      rawminUnitVolume: kerniteFamily.normal.fieryKernite.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: kerniteFamily.compresssed.fieryKernite.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: kerniteFamily.compresssed.fieryKernite.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  // [MERCOXIT]: {
  //   name: MERCOXIT,
  //   priceStep: 3000,
  //   fromBuyPrice: 50000,
  //   toBuyPrice: 100000,
  //   rowValues: {
  //     rawminUnitVolume: 40,
  //     shipVolume: 46200,
  //     rawminQty: 0,
  //     rawminTotalCost: 0,
  //     cminUnitVolume: 0.1,
  //     cminVolume: 0,
  //     cminQty: 0,
  //     cminSellPrice: 40000000,
  //     grosProfit: 0,
  //     brokerFee: 0,
  //     tax: 0,
  //     netProfit: 0,
  //     profit: 0,
  //     profitP: 0,
  //   },
  // },
  //   [PRISTINE_JASPET]: {
  //     name: PRISTINE_JASPET,
  //     priceStep: 15,
  //     fromBuyPrice: 200,
  //     toBuyPrice: 500,
  //     rowValues: {
  //       rawminUnitVolume: 1.2,
  //       shipVolume: 46200,
  //       rawminQty: 0,
  //       rawminTotalCost: 0,
  //       cminUnitVolume: 0.15,
  //       cminVolume: 0,
  //       cminQty: 0,
  //       cminSellPrice: 50000,
  //       grosProfit: 0,
  //       brokerFee: 0,
  //       tax: 0,
  //       netProfit: 0,
  //       profit: 0,
  //       profitP: 0,
  //     },
  //   },
  //   [SPODUMAIN]: {
  //     name: SPODUMAIN,
  //     priceStep: 200,
  //     fromBuyPrice: 4000,
  //     toBuyPrice: 15000,
  //     rowValues: {
  //       rawminUnitVolume: 16,
  //       shipVolume: 46200,
  //       rawminQty: 0,
  //       rawminTotalCost: 0,
  //       cminUnitVolume: 28,
  //       cminVolume: 0,
  //       cminQty: 0,
  //       cminSellPrice: 720000,
  //       grosProfit: 0,
  //       brokerFee: 0,
  //       tax: 0,
  //       netProfit: 0,
  //       profit: 0,
  //       profitP: 0,
  //     },
  //   },
  [pyroxeresFamily.normal.solidPyroxeres.name]: {
    name: pyroxeresFamily.normal.solidPyroxeres.name,
    priceStep: pyroxeresFamily.normal.solidPyroxeres.priceStep,
    fromBuyPrice: pyroxeresFamily.normal.solidPyroxeres.fromBuyPrice,
    toBuyPrice: pyroxeresFamily.normal.solidPyroxeres.toBuyPrice,
    rowValues: {
      rawminUnitVolume: pyroxeresFamily.normal.solidPyroxeres.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: pyroxeresFamily.compresssed.solidPyroxeres.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: pyroxeresFamily.compresssed.solidPyroxeres.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [gneissFamily.normal.brilliantGneiss.name]: {
    name: gneissFamily.normal.brilliantGneiss.name,
    priceStep: gneissFamily.normal.brilliantGneiss.priceStep,
    fromBuyPrice: gneissFamily.normal.brilliantGneiss.fromBuyPrice,
    toBuyPrice: gneissFamily.normal.brilliantGneiss.toBuyPrice,
    rowValues: {
      rawminUnitVolume: gneissFamily.normal.brilliantGneiss.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: gneissFamily.compresssed.brilliantGneiss.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: gneissFamily.compresssed.brilliantGneiss.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [gneissFamily.normal.gneiss.name]: {
    name: gneissFamily.normal.gneiss.name,
    priceStep: gneissFamily.normal.gneiss.priceStep,
    fromBuyPrice: gneissFamily.normal.gneiss.fromBuyPrice,
    toBuyPrice: gneissFamily.normal.gneiss.toBuyPrice,
    rowValues: {
      rawminUnitVolume: gneissFamily.normal.gneiss.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: gneissFamily.compresssed.gneiss.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: gneissFamily.compresssed.gneiss.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [gneissFamily.normal.prismaticGneiss.name]: {
    name: gneissFamily.normal.prismaticGneiss.name,
    priceStep: gneissFamily.normal.prismaticGneiss.priceStep,
    fromBuyPrice: gneissFamily.normal.prismaticGneiss.fromBuyPrice,
    toBuyPrice: gneissFamily.normal.prismaticGneiss.toBuyPrice,
    rowValues: {
      rawminUnitVolume: gneissFamily.normal.prismaticGneiss.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: gneissFamily.compresssed.prismaticGneiss.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: gneissFamily.compresssed.prismaticGneiss.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
  [gneissFamily.normal.iridescentGneiss.name]: {
    name: gneissFamily.normal.iridescentGneiss.name,
    priceStep: gneissFamily.normal.iridescentGneiss.priceStep,
    fromBuyPrice: gneissFamily.normal.iridescentGneiss.fromBuyPrice,
    toBuyPrice: gneissFamily.normal.iridescentGneiss.toBuyPrice,
    rowValues: {
      rawminUnitVolume: gneissFamily.normal.iridescentGneiss.volume,
      shipVolume: SHIP_VOLUMES.MIASMOS,
      rawminQty: 0,
      rawminTotalCost: 0,
      cminUnitVolume: gneissFamily.compresssed.iridescentGneiss.volume,
      cminVolume: 0,
      cminQty: 0,
      cminSellPrice: gneissFamily.compresssed.iridescentGneiss.cminSellPrice,
      grosProfit: 0,
      brokerFee: 0,
      tax: 0,
      netProfit: 0,
      profit: 0,
      profitP: 0,
    },
  },
};
