import React, { useEffect, useReducer } from "react";
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
import { columns } from "./columns";
import icons from "../../../components/shared/materialTableIcons";
import {
  Section,
  Settings,
  SettingsValue,
  MTableInfoLabel,
  MTableInfoValue,
  BasicInfo,
  TableTitle,
} from "./mineralSectionStyle";

import { BROKER_FEE_RATE, TAX_RATE } from "../../../assets/minerals";

const generateRows = (mineralData = {}, pricesRange = []) => {
  if (isEmpty(mineralData) || isEmpty(pricesRange)) return [];

  const {
    rowValues: { cminSellPrice, rawminUnitVolume, shipVolume, cminUnitVolume },
  } = mineralData;

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

  const onlyProfitable = rows.filter(({ profitP }) => profitP >= 0);

  return onlyProfitable;
};

const generatePriceRanges = (mineralData) => {
  if (isEmpty(mineralData)) return [];

  const { fromBuyPrice, priceStep, toBuyPrice } = mineralData;

  let range = [fromBuyPrice];
  let currentPrice = fromBuyPrice;
  do {
    currentPrice += priceStep;
    range.push(currentPrice);
  } while (currentPrice <= toBuyPrice);

  return range;
};

const initialState = {
  mineralData: {},
  pricesRange: [],
  rows: [],
  headers: {
    rawminUnitVolume: 0,
    shipVolume: 0,
    cminUnitVolume: 0,
    rawminQty: 0,
  },
  tableOptions: {
    search: false,
    padding: "dense",
    pageSize: 1,
    sorting: false,
    showTitle: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MINERAL_DATA": {
      const { headers } = state;
      const { payload } = action;
      const {
        rowValues: {
          rawminUnitVolume,
          shipVolume,
          cminUnitVolume,
          rawminQty,
        } = {},
      } = payload;

      return {
        ...state,
        mineralData: payload,
        rows: [],
        headers: {
          ...headers,
          ...(rawminUnitVolume && { rawminUnitVolume }),
          ...(shipVolume && { shipVolume }),
          ...(cminUnitVolume && { cminUnitVolume }),
          ...(rawminQty && { rawminQty }),
        },
      };
    }
    case "GENERATE_PRICE_RANGE": {
      const { mineralData } = state;
      const pricesRange = generatePriceRanges(mineralData);
      return { ...state, pricesRange };
    }
    case "GENERATE_ROWS": {
      const { mineralData, pricesRange } = state;
      const rows = generateRows(mineralData, pricesRange);
      return {
        ...state,
        rows,
        tableOptions: {
          ...state.tableOptions,
          pageSize: rows.length,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const MineralSection = ({ mineralData, handleSellPriceChange }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_MINERAL_DATA", payload: mineralData });
  }, [mineralData]);

  useEffect(() => {
    dispatch({ type: "GENERATE_PRICE_RANGE" });
  }, [state.mineralData]);

  useEffect(() => {
    dispatch({ type: "GENERATE_ROWS" });
  }, [state.pricesRange]);
  console.log("mineral section", state);
  return (
    <>
      {!isEmpty(state.mineralData) && !isEmpty(state.rows) ? (
        <Section>
          <Settings>
            <SettingsValue>
              <span>Sell price</span>
              <input
                key="sellprice"
                type="text"
                value={state.mineralData.rowValues.cminSellPrice}
                onChange={(event) =>
                  handleSellPriceChange(event, state.mineralData.name)
                }
              />
            </SettingsValue>
          </Settings>
          <MaterialTable
            columns={columns}
            data={state.rows}
            icons={icons}
            options={state.tableOptions}
            components={{
              Pagination: () => null,
              Toolbar: (props) => {
                return (
                  <BasicInfo>
                    <TableTitle>{state.mineralData.name}</TableTitle>
                    <MTableInfoLabel>
                      {state.mineralData.name} unit volume:{" "}
                    </MTableInfoLabel>
                    <MTableInfoValue>
                      {state.headers.rawminUnitVolume}
                    </MTableInfoValue>
                    <MTableInfoLabel>
                      compressed {state.mineralData.name} unit volume:{" "}
                    </MTableInfoLabel>
                    <MTableInfoValue>
                      {state.rows[0].cminUnitVolume}
                    </MTableInfoValue>
                    <MTableInfoLabel>Raw mineral quantity: </MTableInfoLabel>
                    <MTableInfoValue>
                      {state.rows[0].rawminQty + " u"}
                    </MTableInfoValue>
                    <MTableInfoLabel>Miasmos Volume: </MTableInfoLabel>
                    <MTableInfoValue>
                      {state.rows[0].shipVolume + " m3"}
                    </MTableInfoValue>
                  </BasicInfo>
                );
              },
            }}
          />
        </Section>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default MineralSection;
