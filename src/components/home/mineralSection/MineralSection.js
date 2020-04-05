import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

import MaterialTable, { MTableToolbar } from "material-table";
import { columns, options, icons } from "./columns";
import { Section, Settings, SettingsValue } from "./style";

const MineralSection = ({
  rawminBuyPrice,
  cminSellPrice,
  mineralData,
  handleBuyPriceChange,
  handleSellPriceChange,
}) => {
  const { name, /* pricesRange, rowValues, */ rows } = mineralData;

  return (
    <Section>
      <Settings>
        <SettingsValue>
          <span>Buy price</span>
          <input
            key="buyprice"
            type="text"
            value={rawminBuyPrice}
            onChange={(event) => handleBuyPriceChange(event, name)}
          />
        </SettingsValue>
        <SettingsValue>
          <span>Sell price</span>
          <input
            key="sellprice"
            type="text"
            value={cminSellPrice}
            onChange={(event) => handleSellPriceChange(event, name)}
          />
        </SettingsValue>
      </Settings>
      <MaterialTable
        title={name}
        columns={columns}
        data={rows}
        icons={icons}
        options={options}
        components={{
          Pagination: () => null,
          Toolbar: (props) => {
            return (
              <div>
                <MTableToolbar {...props} />
                <span>aaa</span>
                <span>bbb</span>
              </div>
            );
          },
        }}
      />
    </Section>
  );
};

export default MineralSection;
