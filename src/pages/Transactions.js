import React from "react";

import { transactions } from "../assets/transactions";
import { BROKER_FEE_RATE, TAX_RATE } from "../assets/minerals";
import TransactionTable from "../components/transactions/transactionTable/transactionTable/TransactionTable";
import Legend from "../components/transactions/transactionTable/legend/Legend";

const prepareSellSummary = ({ transactionId, sell }) => {
  const sellSummary = sell.reduce(
    (acc, sellObj) => {
      acc.totalSellQty += sellObj.cminQty;
      acc.grossProfit += sellObj.cminQty * sellObj.cminSellPrice;
      acc.transactionId = transactionId;
      acc.sellPriceSum += sellObj.cminSellPrice;
      acc.finished = sellObj.finished ? ++acc.finished : acc.finished;
      acc.collectedStatuses = acc.collectedStatuses + sellObj.sellStatus;
      acc.numOfSellTransactions = sell.length;
      return acc;
    },
    {
      numOfSellTransactions: 0,
      sellPriceSum: 0,
      transactionId: 0,
      totalSellQty: 0,
      grossProfit: 0,
      finished: 0,
      collectedStatuses: "",
    }
  );
  return sellSummary;
};

const prepareBuySummary = ({ transactionId, buy }) => {
  const buySummary = buy.reduce(
    (acc, buyObj) => {
      acc.totalQty += buyObj.unore_Qty;
      acc.totalValue += buyObj.unore_Qty * buyObj.unore_BuyPrice;
      acc.transactionId = transactionId;
      acc.vol += buyObj.unore_UnitVolume * buyObj.unore_Qty;
      return acc;
    },
    { transactionId: 0, totalQty: 0, totalValue: 0, vol: 0 }
  );
  return buySummary;
};

const Transaction = () => {
  const summary = transactions.map(({ transactionId, name, buy, sell }) => {
    const buySummary = prepareBuySummary({ transactionId, buy });
    const sellSummary = prepareSellSummary({ transactionId, sell });

    const sellPrice =
      sellSummary.sellPriceSum / sellSummary.numOfSellTransactions;

    const averagePricePerUnit = buySummary.totalValue / buySummary.totalQty;
    const grossProfit = sellSummary.grossProfit;
    const brokerFee = grossProfit * BROKER_FEE_RATE;
    const tax = grossProfit * TAX_RATE;
    const netto = grossProfit - brokerFee - tax;
    const profit = netto - buySummary.totalValue;
    const sold = sellSummary.finished + "/" + sell.length;

    return {
      transactionId: buySummary.transactionId,
      shortName: name,
      volume: buySummary.vol,
      totalQty: buySummary.totalQty,
      totalValue: buySummary.totalValue,
      sellPrice: sellPrice,
      averagePricePerUnit,
      totalSellQty: sellSummary.totalSellQty,
      grossProfit,
      brokerFee,
      tax,
      netto,
      profit,
      sold: sold,
      collectedStatuses: sellSummary.collectedStatuses,
    };
  });

  return (
    <>
      <Legend />
      <TransactionTable summary={summary} />
    </>
  );
};

export default Transaction;
