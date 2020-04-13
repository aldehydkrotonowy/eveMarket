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
      volume: 0.15,
      name: "Scordite",
      shortName: "Scr",
    },
    massiveScordite: {
      volume: 0.15,
      name: "Massive Scordite",
      shortName: "MScr",
    },
    glossyScordite: {
      volume: 0.15,
      name: "Glossy Scordite",
      shortName: "GScr",
    },
    condensedScordite: {
      volume: 0.15,
      name: "Condensed Scordite",
      shortName: "CScr",
    },
  },
  compresssed: {
    scordite: {
      volume: 0.19,
      name: "Compressed Scordite",
      shortName: "cScr",
    },
    massiveScordite: {
      volume: 0.19,
      name: "Compressed Massive Scordite",
      shortName: "cMScr",
    },
    glossyScordite: {
      volume: 0.19,
      name: "Compressed Glossy Scordite",
      shortName: "cGScr",
    },
    condensedScordite: {
      volume: 0.19,
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
      priceStep: 2,
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
      name: "Compressed Veldspar",
      shortName: "cVeld",
    },
    denseVeldspar: {
      volume: 0.15,
      name: "Compressed Dense Veldspar",
      shortName: "cDVeld",
    },
    concentratedVeldspar: {
      volume: 0.15,
      name: "Compressed Concentrated Veldspar",
      shortName: "cCVeld",
    },
    stableVeldspar: {
      volume: 0.15,
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

export const minerals = {
  veldsparFamily,
  scorditeFamily,
  omberFamily,
  spodumainFamily,
};
