import React from "react";
// import NumberFormat from "react-number-format";
// import round from "lodash/round";
// import MaterialTable, { MTableToolbar } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { transactions } from "../helpers/transactions";
import FormatedNum from "../shared/FormatedNum";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Transaction = () => {
  const classes = useStyles();

  const format = (value) => {
    if (isNaN(value)) return null;
    return <FormatedNum value={value} precision={2} />;
  };

  const summary = transactions.map(({ transactionId, buy, sell }) => {
    const buySummary = buy.reduce(
      (acc, buyObj) => {
        acc.totalQty += buyObj.unore_Qty;
        acc.totalValue += buyObj.unore_Qty * buyObj.unore_BuyPrice;
        acc.transactionId = transactionId;
        return acc;
      },
      { transactionId: 0, totalQty: 0, totalValue: 0 }
    );

    const averagePricePerUnit = buySummary.totalValue / buySummary.totalQty;
    const sellSummary = sell.core_Qty * sell.core_SellPrice;
    const brokerFee = sellSummary * sell.brokerFeeRatio;
    const tax = sellSummary * sell.taxRatio;
    const netto = sellSummary - brokerFee - tax;
    const profit = netto - buySummary.totalValue;
    const sold = sell.finished;

    const currentSituationSell = sell.core_Qty * sell.test_sellPrice;
    const currentSituationProfit = netto - currentSituationSell;

    return {
      transactionId: buySummary.transactionId,
      totalQty: buySummary.totalQty,
      totalValue: buySummary.totalValue,
      averagePricePerUnit,
      sellSummary,
      brokerFee,
      tax,
      netto,
      profit,
      sold: sold ? "YES" : "NO",
      altProfit: !sold ? currentSituationProfit : "-",
      altSellPrice: !sold ? sell.test_sellPrice : "-",
    };
  });

  console.table(summary);
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Buy Value</TableCell>
              <TableCell align="right">Average Price</TableCell>
              <TableCell align="right">Gross profit</TableCell>
              <TableCell align="right">Broker</TableCell>
              <TableCell align="right">Tax</TableCell>
              <TableCell align="right">Net profit</TableCell>
              <TableCell align="right">Profit</TableCell>
              <TableCell align="right">Sold</TableCell>
              <TableCell align="right">Alt Net Profit </TableCell>
              <TableCell align="right">Alt price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summary.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.transactionId}</TableCell>
                <TableCell align="right">{format(row.totalQty)}</TableCell>
                <TableCell align="right">{format(row.totalValue)}</TableCell>
                <TableCell align="right">
                  {format(row.averagePricePerUnit)}
                </TableCell>
                <TableCell align="right">{format(row.sellSummary)}</TableCell>
                <TableCell align="right">{format(row.brokerFee)}</TableCell>
                <TableCell align="right">{format(row.tax)}</TableCell>
                <TableCell align="right">{format(row.netto)}</TableCell>
                <TableCell align="right">{format(row.profit)}</TableCell>
                <TableCell align="right">{row.sold}</TableCell>
                <TableCell align="right">{format(row.altProfit)} </TableCell>
                <TableCell align="right">{format(row.altSellPrice)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Transaction;
