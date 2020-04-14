export const SHORT_PLAGIOCLASE = "P";
export const SHORT_GOLDEN_OMBER = "GO";
export const SHORT_AZURE_PLAGIOCLASE = "AP";
export const SHORT_SCORDITE = "S";
export const SHORT_CONDENSED_SCORDITE = "CS";
export const SHORT_VELDSPARE = "V";
export const SHORT_DENSE_VELDSPARE = "DV";
export const SHORT_OMBER = "O";
export const SHORT_PRISTINE_JASPET = "PJ";
export const SHORT_SOLID_PYROXERES = "SPy";
export const SHORT_LUMINOUS_KERNITE = "LKer";
export const SHORT_FIERY_KERNITE = "FKer";
export const SHORT_KERNITE = "Ker";

export const BROKER_FEE_RATE = 0.04404193632;
export const TAX_RATE = 0.05;

export const SHIP_VOLUMES = {
  MIASMOS: 46200,
};

const omberFamily = {
  normal: {
    omber: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 100,
      volume: 0.6,
      name: "Omber",
      shortName: "Omb",
    },
    goldenOmber: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 120,
      volume: 0.6,
      name: "Golden Omber",
      shortName: "GOmb",
    },
    platinoidOmber: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 100,
      volume: 0.6,
      name: "Platinoid Omber",
      shortName: "POmb",
    },
    silverOmber: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 100,
      volume: 0.6,
      name: "Silver Omber",
      shortName: "SOmb",
    },
  },
  compresssed: {
    omber: {
      volume: 0.3,
      cminSellPrice: 11000,
      name: "Compressed Omber",
      shortName: "cOmb",
    },
    goldenOmber: {
      volume: 0.3,
      cminSellPrice: 11000,
      name: "Compressed Golden Omber",
      shortName: "cGOmb",
    },
    platinoidOmber: {
      volume: 0.3,
      cminSellPrice: 11000,
      name: "Compressed Platinoid Omber",
      shortName: "cPOmb",
    },
    silverOmber: {
      volume: 0.3,
      cminSellPrice: 11000,
      name: "Compressed Silver Omber",
      shortName: "cSOmb",
    },
  },
};

const scorditeFamily = {
  normal: {
    scordite: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 100,
      volume: 0.15,
      name: "Scordite",
      shortName: "Scr",
    },
    massiveScordite: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 100,
      volume: 0.15,
      name: "Massive Scordite",
      shortName: "MScr",
    },
    glossyScordite: {
      priceStep: 5,
      fromBuyPrice: 20,
      toBuyPrice: 100,
      volume: 0.15,
      name: "Glossy Scordite",
      shortName: "GScr",
    },
    condensedScordite: {
      priceStep: 1,
      fromBuyPrice: 15,
      toBuyPrice: 100,
      volume: 0.15,
      name: "Condensed Scordite",
      shortName: "CScr",
    },
  },
  compresssed: {
    scordite: {
      volume: 0.19,
      cminSellPrice: 4000,
      name: "Compressed Scordite",
      shortName: "cScr",
    },
    massiveScordite: {
      volume: 0.19,
      cminSellPrice: 4000,
      name: "Compressed Massive Scordite",
      shortName: "cMScr",
    },
    glossyScordite: {
      volume: 0.19,
      cminSellPrice: 4000,
      name: "Compressed Glossy Scordite",
      shortName: "cGScr",
    },
    condensedScordite: {
      volume: 0.19,
      cminSellPrice: 4000,
      name: "Compressed Condensed Scordite",
      shortName: "cCScr",
    },
  },
};

const veldsparFamily = {
  normal: {
    veldspar: {
      priceStep: 2,
      fromBuyPrice: 16,
      toBuyPrice: 40,
      volume: 0.1,
      name: "Veldspar",
      shortName: "Veld",
    },
    denseVeldspar: {
      priceStep: 1,
      fromBuyPrice: 16,
      toBuyPrice: 40,
      volume: 0.1,
      name: "Dense Veldspar",
      shortName: "DVeld",
    },
    concentratedVeldspar: {
      priceStep: 2,
      fromBuyPrice: 16,
      toBuyPrice: 40,
      volume: 0.1,
      name: "Concentrated Veldspar",
      shortName: "CVeld",
    },
    stableVeldspar: {
      priceStep: 2,
      fromBuyPrice: 16,
      toBuyPrice: 40,
      volume: 0.1,
      name: "Stable Veldspar",
      shortName: "SVeld",
    },
  },
  compresssed: {
    veldspar: {
      volume: 0.15,
      cminSellPrice: 2000,
      name: "Compressed Veldspar",
      shortName: "cVeld",
    },
    denseVeldspar: {
      volume: 0.15,
      cminSellPrice: 3000,
      name: "Compressed Dense Veldspar",
      shortName: "cDVeld",
    },
    concentratedVeldspar: {
      volume: 0.15,
      cminSellPrice: 2000,
      name: "Compressed Concentrated Veldspar",
      shortName: "cCVeld",
    },
    stableVeldspar: {
      volume: 0.15,
      cminSellPrice: 2000,
      name: "Compressed Stable Veldspar",
      shortName: "cSVeld",
    },
  },
};

const spodumainFamily = {
  normal: {
    spodumain: {
      volume: 16,
      name: "Spodumain",
      shortName: "Sp",
    },
    gleamingSpodumain: {
      volume: 16,
      name: "Gleaming Spodumain",
      shortName: "GSp",
    },
    dazzlingSpodumain: {
      volume: 16,
      name: "Dazzling Spodumain",
      shortName: "DSp",
    },
    brightSpodumain: {
      volume: 16,
      name: "Bright Spodumain",
      shortName: "BSp",
    },
  },
  compresssed: {
    spodumain: {
      volume: 28,
      name: "Compressed Veldspar",
      shortName: "cVeld",
    },
    gleamingSpodumain: {
      volume: 28,
      name: "Compressed Dense Veldspar",
      shortName: "cDVeld",
    },
    dazzlingSpodumain: {
      volume: 28,
      name: "Compressed Concentrated Veldspar",
      shortName: "cCVeld",
    },
    brightSpodumain: {
      volume: 28,
      name: "Compressed Stable Veldspar",
      shortName: "cSVeld",
    },
  },
};

const kerniteFamily = {
  normal: {
    kernite: {
      priceStep: 5,
      fromBuyPrice: 100,
      toBuyPrice: 200,
      volume: 1.2,
      name: "Kernite",
      shortName: "Ker",
    },
    fieryKernite: {
      priceStep: 5,
      fromBuyPrice: 100,
      toBuyPrice: 200,
      volume: 1.2,
      name: "Fiery Kernite",
      shortName: "FKer",
    },
    resplendantKernite: {
      priceStep: 5,
      fromBuyPrice: 100,
      toBuyPrice: 200,
      volume: 1.2,
      name: "Resplendant Kernite",
      shortName: "RKer",
    },
    luminousKernite: {
      priceStep: 5,
      fromBuyPrice: 100,
      toBuyPrice: 200,
      volume: 1.2,
      name: "Luminous Kernite",
      shortName: "LKer",
    },
  },
  compresssed: {
    kernite: {
      volume: 0.19,
      cminSellPrice: 24000,
      name: "Compressed Kernite",
      shortName: "cKer",
    },
    fieryKernite: {
      volume: 0.19,
      cminSellPrice: 24000,
      name: "Compressed Resplendant Kernite",
      shortName: "cFKer",
    },
    resplendantKernite: {
      volume: 0.19,
      cminSellPrice: 24000,
      name: "Compressed Resplendant Kernite",
      shortName: "cRKer",
    },
    luminousKernite: {
      volume: 0.19,
      cminSellPrice: 24000,
      name: "Compressed Luminous Kernite",
      shortName: "cLKer",
    },
  },
};

const plagioclaseFamily = {
  normal: {
    plagioclase: {
      priceStep: 1,
      fromBuyPrice: 10,
      toBuyPrice: 60,
      volume: 0.35,
      name: "Plagioclase",
      shortName: "Pla",
    },
    richPlagioclase: {
      priceStep: 1,
      fromBuyPrice: 10,
      toBuyPrice: 60,
      volume: 0.35,
      name: "Rich Plagioclase",
      shortName: "RPla",
    },
    azurePlagioclase: {
      priceStep: 1,
      fromBuyPrice: 30,
      toBuyPrice: 60,
      volume: 0.35,
      name: "Azure Plagioclase",
      shortName: "APla",
    },
    sparklingPlagioclase: {
      priceStep: 1,
      fromBuyPrice: 10,
      toBuyPrice: 60,
      volume: 0.35,
      name: "Sparkling Plagioclase",
      shortName: "SPla",
    },
  },
  compresssed: {
    plagioclase: {
      volume: 0.15,
      cminSellPrice: 8000,
      name: "Compressed Plagioclase",
      shortName: "cPlar",
    },
    richPlagioclase: {
      volume: 0.15,
      cminSellPrice: 8000,
      name: "Compressed Rich Plagioclase",
      shortName: "cRPla",
    },
    azurePlagioclase: {
      volume: 0.15,
      cminSellPrice: 8000,
      name: "Compressed Azure Plagioclase",
      shortName: "cAPla",
    },
    sparklingPlagioclase: {
      volume: 0.15,
      cminSellPrice: 8000,
      name: "Compressed Sparkling Plagioclase",
      shortName: "cSPla",
    },
  },
};

const pyroxeresFamily = {
  normal: {
    pyroxeres: {
      priceStep: 1,
      fromBuyPrice: 10,
      toBuyPrice: 60,
      volume: 0.3,
      name: "Pyroxeres",
      shortName: "Pyr",
    },
    solidPyroxeres: {
      priceStep: 1,
      fromBuyPrice: 20,
      toBuyPrice: 60,
      volume: 0.3,
      name: "Solid Pyroxeres",
      shortName: "Spyr",
    },
    viscousPyroxeres: {
      priceStep: 1,
      fromBuyPrice: 10,
      toBuyPrice: 60,
      volume: 0.3,
      name: "Viscous Pyroxeres",
      shortName: "VPyr",
    },
    opulentPyroxeres: {
      priceStep: 1,
      fromBuyPrice: 10,
      toBuyPrice: 60,
      volume: 0.3,
      name: "Opulent Pyroxeres",
      shortName: "OPyr",
    },
  },
  compresssed: {
    pyroxeres: {
      volume: 0.16,
      cminSellPrice: 7000,
      name: "Compressed Pyroxeres",
      shortName: "cPyr",
    },
    solidPyroxeres: {
      volume: 0.16,
      cminSellPrice: 7000,
      name: "Compressed Solid Pyroxeres",
      shortName: "cSpyr",
    },
    viscousPyroxeres: {
      volume: 0.16,
      cminSellPrice: 7000,
      name: "Compressed Viscous Pyroxeres",
      shortName: "cVPyr",
    },
    opulentPyroxeres: {
      volume: 0.16,
      cminSellPrice: 7000,
      name: "Compressed Opulent Pyroxeres",
      shortName: "cOPyr",
    },
  },
};

export const minerals = {
  veldsparFamily,
  scorditeFamily,
  omberFamily,
  spodumainFamily,
  kerniteFamily,
  plagioclaseFamily,
  pyroxeresFamily,
};
