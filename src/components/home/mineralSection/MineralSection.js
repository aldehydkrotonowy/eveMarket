import React, { useState, useEffect, useCallback } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { isEmpty } from "lodash";
import MaterialTable from "material-table";
import { columns, options, icons } from "./columns";
import {
  Section,
  Settings,
  SettingsValue,
  MTableInfoLabel,
  MTableInfoValue,
  BasicInfo,
  TableTitle,
} from "./style";

import { BROKER_FEE_RATE, TAX_RATE } from "../../../helpers/minerals";

const MineralSection = ({
  mineralData: { name, pricesRange, rowValues },
  handleSellPriceChange,
}) => {
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState({
    rawminUnitVolume: 0,
    shipVolume: 0,
    cminUnitVolume: 0,
    rawminQty: 0,
  });

  const generateRows = useCallback(() => {
    const {
      cminSellPrice,
      rawminUnitVolume,
      shipVolume,
      cminUnitVolume,
    } = rowValues;

    const rows = pricesRange.map((rawminGeneratedBuyPrice) => {
      const rawminQty = shipVolume / rawminUnitVolume;
      const uminCost = rawminQty * parseFloat(rawminGeneratedBuyPrice);

      const cminQty = rawminQty / 100;
      const cminVolume = cminQty * cminUnitVolume;

      const grosProfit = cminQty * cminSellPrice;

      const brokerFee = -(grosProfit * parseFloat(BROKER_FEE_RATE));
      const tax = -(grosProfit * parseFloat(TAX_RATE));

      const netProfit = grosProfit + brokerFee + tax;
      const profit = netProfit - uminCost;
      const profitP = (profit / uminCost) * 100;

      return {
        rawminUnitVolume: rawminUnitVolume,
        shipVolume: shipVolume,
        rawminBuyPrice: parseFloat(rawminGeneratedBuyPrice),
        rawminQty: rawminQty,
        uminCost: uminCost,
        cminUnitVolume: cminUnitVolume,
        cminVolume: cminVolume,
        cminQty: cminQty,
        cminSellPrice: cminSellPrice,
        grosProfit: grosProfit,
        brokerFee: brokerFee,
        tax: tax,
        netProfit: netProfit,
        profit: profit,
        profitP: profitP,
      };
    });

    return rows;
  }, [pricesRange, rowValues]);

  useEffect(() => {
    setRows(generateRows());
  }, [rowValues, generateRows]);

  useEffect(() => {
    if (!isEmpty(rows)) {
      const headers = {
        rawminUnitVolume: rows[0].rawminUnitVolume,
        shipVolume: rows[0].shipVolume,
        cminUnitVolume: rows[0].cminUnitVolume,
        rawminQty: rows[0].rawminQty,
      };
      setHeaders({ ...headers });
    }
  }, [rows]);

  return (
    <Section>
      <Settings>
        <SettingsValue>
          <span>Sell price</span>
          <input
            key="sellprice"
            type="text"
            value={rowValues.cminSellPrice}
            onChange={(event) => handleSellPriceChange(event, name)}
          />
        </SettingsValue>
      </Settings>
      <MaterialTable
        // title={name}
        columns={columns}
        data={rows}
        icons={icons}
        options={options}
        components={{
          Pagination: () => null,
          Toolbar: (props) => {
            return (
              <BasicInfo>
                <TableTitle>{name}</TableTitle>
                <MTableInfoLabel> {name} unit volume: </MTableInfoLabel>
                <MTableInfoValue>{headers.rawminUnitVolume}</MTableInfoValue>
                <MTableInfoLabel>
                  compressed {name} unit volume:{" "}
                </MTableInfoLabel>
                <MTableInfoValue>{headers.cminUnitVolume}</MTableInfoValue>
                <MTableInfoLabel>Raw mineral quantity: </MTableInfoLabel>
                <MTableInfoValue>{headers.rawminQty} u</MTableInfoValue>
                <MTableInfoLabel>Miasmos Volume: </MTableInfoLabel>
                <MTableInfoValue>{headers.shipVolume} m3</MTableInfoValue>
              </BasicInfo>
            );
          },
        }}
      />
    </Section>
  );
};

export default MineralSection;
