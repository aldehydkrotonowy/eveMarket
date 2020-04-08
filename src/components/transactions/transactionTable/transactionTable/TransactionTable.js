import React from "react";
import FormatedNum from "../../../../shared/FormatedNum";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sold: {
    "& td": {
      background: "#e5ffe5",
    },
  },
  onMarket: {
    "& td": {
      background: "#fdeeb9",
    },
  },
  notOnMarked: {
    "& td": {
      background: "#fddede",
    },
  },
  bringToJita: {
    "& td": {
      background: "#ff6060",
    },
  },
  default: {
    "& td": {
      background: "white",
    },
  },
});

const TransactionTable = ({ summary }) => {
  const classes = useStyles();
  const sold = /^S*$/;
  const onMarket = /^M*$/;
  const bringToJita = /^Q*$/;

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Volume</TableCell>
            <TableCell align="right">Buy Value</TableCell>
            <TableCell align="right">Average Price</TableCell>

            <TableCell align="right">Compressed Qty</TableCell>
            <TableCell align="right">Gross profit</TableCell>
            <TableCell align="right">Broker</TableCell>
            <TableCell align="right">Tax</TableCell>
            <TableCell align="right">Net profit</TableCell>
            <TableCell align="right">Profit</TableCell>
            <TableCell align="right">Sold</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {summary.map((row) => {
            let cl = "";
            if (sold.test(row.collectedStatuses)) {
              cl = classes.sold;
            } else if (onMarket.test(row.collectedStatuses)) {
              cl = classes.onMarket;
            } else if (bringToJita.test(row.collectedStatuses)) {
              cl = classes.bringToJita;
            } else {
              cl = classes.default;
            }
            return (
              <TableRow key={row.name} className={cl}>
                <TableCell align="right">{row.transactionId}</TableCell>
                <TableCell align="right">{row.shortName}</TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.totalQty}
                    precision={2}
                    postfix=" u"
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.volume}
                    precision={2}
                    postfix={
                      <>
                        <span> m</span>
                        <sup>3</sup>
                      </>
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.totalValue}
                    precision={2}
                    postfix=" ISK"
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.averagePricePerUnit}
                    precision={2}
                    postfix=" ISK"
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.totalSellQty}
                    precision={2}
                    postfix=" ISK"
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.grossProfit}
                    precision={2}
                    postfix=" ISK"
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.brokerFee}
                    precision={2}
                    postfix=" ISK"
                  />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum value={row.tax} precision={2} postfix=" ISK" />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum value={row.netto} precision={2} postfix=" ISK" />
                </TableCell>
                <TableCell align="right">
                  <FormatedNum
                    value={row.profit}
                    precision={2}
                    postfix=" ISK"
                  />
                </TableCell>
                <TableCell align="right">{row.sold}</TableCell>
                <TableCell align="right">{row.collectedStatuses}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
