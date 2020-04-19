//tax eve obl na podstawie wpisanej ceny 5450! a nie rzeczywistej ceny sprzedaży
import {
  SHORT_PLAGIOCLASE,
  SHORT_AZURE_PLAGIOCLASE,
  // SHORT_SCORDITE,
  SHORT_CONDENSED_SCORDITE,
  // SHORT_VELDSPARE,
  SHORT_DENSE_VELDSPARE,
  SHORT_STABLE_VELDSPARE,
  SHORT_CONCENTRATED_VELDSPARE,
  // SHORT_OMBER,
  SHORT_GOLDEN_OMBER,
  SHORT_SOLID_PYROXERES,
  SHORT_LUMINOUS_KERNITE,
  SHORT_KERNITE,
  SHORT_FIERY_KERNITE,
  SHORT_PRISTINE_JASPET,
} from "./minerals";

export const transactions = [
  {
    transactionId: 1,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        time: "2020-04-01 21:31",
        unore_Name: "Veldspar",
        unore_Qty: 121329,
        unore_BuyPrice: 17.04,
        unore_UnitVolume: 0.1,
      },
      {
        buyId: 2,
        transactionType: "buy",
        time: "2020-04-01 21:31",
        unore_Name: "Veldspar",
        unore_Qty: 200000,
        unore_BuyPrice: 18.04,
        unore_UnitVolume: 0.1,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-02 17:52",
        compressionRatio: 100,
        cminName: "Compressed Veldspar",
        cminQty: 3279,
        cminSellPrice: 3399,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 2,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        time: "2020-04-02 19:46",
        unore_Name: "Condensed Scordite",
        unore_Qty: 37391,
        unore_BuyPrice: 23.0,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 2,
        transactionType: "buy",
        time: "2020-04-02 19:46",
        unore_Name: "Condensed Scordite",
        unore_Qty: 18146,
        unore_BuyPrice: 20.0,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 3,
        transactionType: "buy",
        time: "2020-04-02 20:14",
        unore_Name: "Condensed Scordite",
        unore_Qty: 119073,
        unore_BuyPrice: 22.97,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 4,
        transactionType: "buy",
        time: "2020-04-02 20:39",
        unore_Name: "Condensed Scordite",
        unore_Qty: 33333,
        unore_BuyPrice: 21.07,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 5,
        transactionType: "buy",
        time: "2020-04-02 20:48",
        unore_Name: "Condensed Scordite",
        unore_Qty: 21221,
        unore_BuyPrice: 19.88,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 6,
        transactionType: "buy",
        time: "2020-04-03 19:43",
        unore_Name: "Condensed Scordite",
        unore_Qty: 31007,
        unore_BuyPrice: 23.24,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 7,
        transactionType: "buy",
        time: "2020-04-03 19:43",
        unore_Name: "Condensed Scordite",
        unore_Qty: 18856,
        unore_BuyPrice: 24.51,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 8,
        transactionType: "buy",
        time: "2020-04-03 21:12",
        unore_Name: "Condensed Scordite",
        unore_Qty: 4568,
        unore_BuyPrice: 22.96,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 9,
        transactionType: "buy",
        time: "2020-04-03 21:21",
        unore_Name: "Condensed Scordite",
        unore_Qty: 36607,
        unore_BuyPrice: 24.12,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 10,
        transactionType: "buy",
        time: "2020-04-03 21:31",
        unore_Name: "Condensed Scordite",
        unore_Qty: 159383,
        unore_BuyPrice: 25.0,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 11,
        transactionType: "buy",
        time: "2020-04-03 21:31",
        unore_Name: "Condensed Scordite",
        unore_Qty: 21653,
        unore_BuyPrice: 24.12,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 12,
        transactionType: "buy",
        time: "2020-04-04 10:58",
        unore_Name: "Condensed Scordite",
        unore_Qty: 43916,
        unore_BuyPrice: 24.51,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        onMarket: null,
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-06 17:57",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 5450,
        cminSellPrice: 5500,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 3,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        time: "2020-04-06 19:37",
        unore_Name: "Condensed Scordite",
        unore_Qty: 118477,
        unore_BuyPrice: 27.0,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 2,
        transactionType: "buy",
        time: "2020-04-06 19:39",
        unore_Name: "Condensed Scordite",
        unore_Qty: 240000,
        unore_BuyPrice: 33.0,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 3,
        transactionType: "buy",
        time: "2020-04-06 19:40",
        unore_Name: "Condensed Scordite",
        unore_Qty: 9078,
        unore_BuyPrice: 27.0,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "M",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-06 17:57????????",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 3766,
        cminSellPrice: 5248,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 4,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        time: "2020-04-06 21:38",
        unore_Name: "Condensed Scordite",
        unore_Qty: 2519263,
        unore_BuyPrice: 28.5,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 2,
        transactionType: "buy",
        time: "2020-04-06 21:39",
        unore_Name: "Condensed Scordite",
        unore_Qty: 100000,
        unore_BuyPrice: 27.49,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 3,
        transactionType: "buy",
        time: "2020-04-06 21:40",
        unore_Name: "Condensed Scordite",
        unore_Qty: 108799,
        unore_BuyPrice: 27.5,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 4,
        transactionType: "buy",
        system: "Athinard",
        time: "2020-04-13 19:10",
        unore_Name: "Condensed Scordite",
        unore_Qty: 20186,
        unore_BuyPrice: 5.01,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-17 02:57",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 26875,
        cminSellPrice: 4000,
        cminUnitVolume: 0.19,
      },
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-17 01:14",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 809,
        cminSellPrice: 4088,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 5,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        system: "Yulay",
        transactionType: "buy",
        time: "2020-04-08 16:16",
        unore_Name: "Condensed Scordite",
        unore_Qty: 220616,
        unore_BuyPrice: 16.04,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 2,
        system: "Sheron",
        transactionType: "buy",
        time: "2020-04-08 16:16",
        unore_Name: "Condensed Scordite",
        unore_Qty: 62023,
        unore_BuyPrice: 10,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 1,
        system: "Pakhshi",
        transactionType: "buy",
        time: "2020-04-08 18:20",
        unore_Name: "Condensed Scordite",
        unore_Qty: 68419,
        unore_BuyPrice: 16.02,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-09 05:54",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 3510,
        cminSellPrice: 4000,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 6,
    name: SHORT_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Villore",
        transactionType: "mined",
        time: null,
        unore_Name: "Plagioclase",
        unore_Qty: 39700, //na pewno 100 razy więcej ?
        unore_BuyPrice: 0,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-08 20:43",
        compressionRatio: 100,
        cminName: "Compressed Plagioclase",
        cminQty: 397,
        cminSellPrice: 8390,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 7,
    name: SHORT_AZURE_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Villore",
        transactionType: "mined",
        time: null,
        unore_Name: "Azure Plagioclase",
        unore_Qty: 141100,
        unore_BuyPrice: 0,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-08 18:20",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 1411,
        cminSellPrice: 8200,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 8,
    name: SHORT_AZURE_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Samanuni",
        transactionType: "buy",
        time: "2020-04-08 21:57",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 10333,
        unore_BuyPrice: 10,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 2,
        system: "Samanuni",
        transactionType: "buy",
        time: "2020-04-08 21:57",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 36168,
        unore_BuyPrice: 15,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 3,
        system: "Isinokka",
        transactionType: "buy",
        time: "2020-04-09 07:21",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 200023,
        unore_BuyPrice: 48.53,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 4,
        system: "Isinokka",
        transactionType: "buy",
        time: "2020-04-09 07:21",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 14285,
        unore_BuyPrice: 48.53,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 5,
        system: "Isinokka",
        transactionType: "buy",
        time: "2020-04-09 07:21",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 14285,
        unore_BuyPrice: 48.53,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-09 13:19",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 2750,
        cminSellPrice: 8990,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 9,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        system: "Yulay",
        transactionType: "buy",
        time: "2020-04-08 16:16",
        unore_Name: "Condensed Scordite",
        unore_Qty: 1674866,
        unore_BuyPrice: 23.52,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-09 05:54",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 5,
        cminSellPrice: 4500,
        cminUnitVolume: 0.19,
      },
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-09 05:54",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 16743,
        cminSellPrice: 4500,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 10,
    name: SHORT_AZURE_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Osmon",
        transactionType: "buy",
        time: "2020-04-10 17:27",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 40000,
        unore_BuyPrice: 36.05,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 2,
        system: "Sakkikainen",
        transactionType: "buy",
        time: "2020-04-10 17:37",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 12675,
        unore_BuyPrice: 36.03,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "M",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-08 18:20",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 526,
        cminSellPrice: 8900,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 11,
    name: SHORT_LUMINOUS_KERNITE,
    buy: [
      {
        buyId: 1,
        system: "Ourapheh",
        transactionType: "mined",
        time: null,
        unore_Name: "Luminous Kernite",
        unore_Qty: 0,
        unore_BuyPrice: 0,
        unore_UnitVolume: 1.2,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-14 12:36",
        compressionRatio: 100,
        cminName: "Compressed Luminous Kernite",
        cminQty: 203,
        cminSellPrice: 20490,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 12,
    name: SHORT_SOLID_PYROXERES,
    buy: [
      {
        buyId: 1,
        system: "Ourapheh",
        transactionType: "mined",
        time: null,
        unore_Name: "Solid Pyroxeres",
        unore_Qty: 0,
        unore_BuyPrice: 0,
        unore_UnitVolume: 0.3,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-13 09:01",
        compressionRatio: 100,
        cminName: "Compressed Solid Pyroxeres",
        cminQty: 411,
        cminSellPrice: 7999,
        cminUnitVolume: 0.16,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 13,
    name: SHORT_KERNITE,
    buy: [
      {
        buyId: 1,
        system: "Ourapheh",
        transactionType: "mined",
        time: null,
        unore_Name: "Kernite",
        unore_Qty: 0,
        unore_BuyPrice: 0,
        unore_UnitVolume: 1.2,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-16 17:37",
        compressionRatio: 100,
        cminName: "Compressed Kernite",
        cminQty: 12,
        cminSellPrice: 21500,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 14,
    name: SHORT_FIERY_KERNITE,
    buy: [
      {
        buyId: 1,
        system: "Ourapheh",
        transactionType: "mined",
        time: null,
        unore_Name: "Ferry Kernite",
        unore_Qty: 0,
        unore_BuyPrice: 0,
        unore_UnitVolume: 1.2,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-14 06:52",
        compressionRatio: 100,
        cminName: "Compressed Ferry Kernite",
        cminQty: 55,
        cminSellPrice: 24980,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 15,
    name: SHORT_GOLDEN_OMBER,
    buy: [
      {
        buyId: 1,
        system: "Shemah",
        transactionType: "buy",
        time: "2020-04-11 12:36",
        unore_Name: "Golden Omber",
        unore_Qty: 127610,
        unore_BuyPrice: 50,
        unore_UnitVolume: 0.6,
      },
      {
        buyId: 2,
        system: "Altrinur",
        transactionType: "buy",
        time: "2020-04-11 15:27",
        unore_Name: "Golden Omber",
        unore_Qty: 11000,
        unore_BuyPrice: 52.19,
        unore_UnitVolume: 0.6,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-18 21:26",
        compressionRatio: 100,
        cminName: "Compressed Golden Omber",
        cminQty: 1386,
        cminSellPrice: 12000,
        cminUnitVolume: 0.3,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 16,
    name: SHORT_PRISTINE_JASPET,
    buy: [
      {
        buyId: 1,
        system: "Vaskhah",
        transactionType: "buy",
        time: "2020-04-11 13:39",
        unore_Name: "Pristine Jaspet",
        unore_Qty: 15848,
        unore_BuyPrice: 272,
        unore_UnitVolume: 2,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "Q",
        sellId: 1,
        transactionType: "sell",
        time: "/* 2020-04-08 18:20 */",
        compressionRatio: 100,
        cminName: "Compressed Pristine Jaspet",
        cminQty: 0,
        cminSellPrice: 0,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 17,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        system: "Jouvalen",
        time: "2020-04-11 17:49",
        unore_Name: "Condensed Scordite",
        unore_Qty: 114016,
        unore_BuyPrice: 25.49,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-11 17:34",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 1140,
        cminSellPrice: 4000,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 18,
    name: SHORT_FIERY_KERNITE,
    buy: [
      {
        buyId: 1,
        system: "Heck",
        transactionType: "buy",
        time: "2020-04-14 16:21",
        unore_Name: "Ferry Kernite",
        unore_Qty: 20771,
        unore_BuyPrice: 0,
        unore_UnitVolume: 1.2,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "M",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-14 06:52",
        compressionRatio: 100,
        cminName: "Compressed Ferry Kernite",
        cminQty: 207,
        cminSellPrice: 24000,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 19,
    name: SHORT_AZURE_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Illuin",
        transactionType: "buy",
        time: "2020-04-14 16:49",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 257414,
        unore_BuyPrice: 53.5,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-14 19:59",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 2292,
        cminSellPrice: 8094,
        cminUnitVolume: 0.15,
      },
      {
        finished: true,
        sellStatus: "S",
        sellId: 2,
        transactionType: "sell",
        time: "2020-04-14 19:59",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 282,
        cminSellPrice: 8100,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 20,
    name: SHORT_AZURE_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Kamio",
        transactionType: "buy",
        time: "2020-04-14 20:36",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 142505,
        unore_BuyPrice: 52.12,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-16 00:06",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 1425,
        cminSellPrice: 8098,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 20,
    name: SHORT_GOLDEN_OMBER,
    buy: [
      {
        buyId: 1,
        system: "Teonusude",
        transactionType: "buy",
        time: "2020-04-15 17:46",
        unore_Name: "Golden Omber",
        unore_Qty: 162801,
        unore_BuyPrice: 45.0,
        unore_UnitVolume: 0.6,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-19 11:57",
        compressionRatio: 100,
        cminName: "Compressed Golden Omber",
        cminQty: 1189,
        cminSellPrice: 12000,
        cminUnitVolume: 0.3,
      },
      {
        finished: false,
        sellStatus: "M",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-14 19:59",
        compressionRatio: 100,
        cminName: "Compressed Golden Omber",
        cminQty: 439,
        cminSellPrice: 12000,
        cminUnitVolume: 0.3,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 21,
    name: SHORT_AZURE_PLAGIOCLASE,
    buy: [
      {
        buyId: 1,
        system: "Dodenvale",
        transactionType: "buy",
        time: "2020-04-16 17:43",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 11863,
        unore_BuyPrice: 46.46,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 2,
        system: "Mirilene",
        transactionType: "buy",
        time: "2020-04-16 17:43",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 80936,
        unore_BuyPrice: 56.36,
        unore_UnitVolume: 0.35,
      },
      {
        buyId: 3,
        system: "Bourynes",
        transactionType: "buy",
        time: "2020-04-16 17:42",
        unore_Name: "Azure Plagioclase",
        unore_Qty: 70986,
        unore_BuyPrice: 55.32,
        unore_UnitVolume: 0.35,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 2,
        transactionType: "sell",
        time: "2020-04-17 07:23",
        compressionRatio: 100,
        cminName: "Compressed Azure Plagioclase",
        cminQty: 1637,
        cminSellPrice: 7998,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 22,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:30",
        unore_Name: "Condensed Scordite",
        unore_Qty: 500000,
        unore_BuyPrice: 20.0,
        unore_UnitVolume: 0.15,
      },
      {
        buyId: 2,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:30",
        unore_Name: "Condensed Scordite",
        unore_Qty: 69015,
        unore_BuyPrice: 22.0,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "M",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-11 17:34",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 5690,
        cminSellPrice: 4090,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 23,
    name: SHORT_DENSE_VELDSPARE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:30",
        unore_Name: "Dense Veldspar",
        unore_Qty: 46345,
        unore_BuyPrice: 17.0,
        unore_UnitVolume: 0.1,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-18 17:53",
        compressionRatio: 100,
        cminName: "Compressed Dense Veldspar",
        cminQty: 463,
        cminSellPrice: 3299,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 24,
    name: SHORT_CONCENTRATED_VELDSPARE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:49",
        unore_Name: "Concentrated Veldspar",
        unore_Qty: 215893,
        unore_BuyPrice: 19.0,
        unore_UnitVolume: 0.1,
      },
      {
        buyId: 1,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:49",
        unore_Name: "Concentrated Veldspar",
        unore_Qty: 489651,
        unore_BuyPrice: 20.0,
        unore_UnitVolume: 0.1,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-18 17:13",
        compressionRatio: 100,
        cminName: "Compressed Concentrated Veldspar",
        cminQty: 7055,
        cminSellPrice: 3090,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 25,
    name: SHORT_STABLE_VELDSPARE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:55",
        unore_Name: "Concentrated Veldspar",
        unore_Qty: 369632,
        unore_BuyPrice: 16.98,
        unore_UnitVolume: 0.1,
      },
    ],
    sell: [
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-18 19:41",
        compressionRatio: 100,
        cminName: "Compressed Stable Veldspar",
        cminQty: 2435,
        cminSellPrice: 4190,
        cminUnitVolume: 0.15,
      },
      {
        finished: true,
        sellStatus: "S",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-18 22:23",
        compressionRatio: 100,
        cminName: "Compressed Stable Veldspar",
        cminQty: 1261,
        cminSellPrice: 4190,
        cminUnitVolume: 0.15,
      },
    ],
  },
  //==========================================================================================================
  {
    transactionId: 26,
    name: SHORT_CONDENSED_SCORDITE,
    buy: [
      {
        buyId: 1,
        transactionType: "buy",
        system: "Gulfonodi",
        time: "2020-04-18 14:30",
        unore_Name: "Condensed Scordite",
        unore_Qty: 1000000,
        unore_BuyPrice: 20.0,
        unore_UnitVolume: 0.15,
      },
    ],
    sell: [
      {
        finished: false,
        sellStatus: "Q",
        sellId: 1,
        transactionType: "sell",
        time: "2020-04-11 17:34",
        compressionRatio: 100,
        cminName: "Compressed Condensed Scordite",
        cminQty: 5690,
        cminSellPrice: 4090,
        cminUnitVolume: 0.19,
      },
    ],
  },
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
  //==========================================================================================================
];