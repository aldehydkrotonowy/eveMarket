import React from "react";

import Search from "@material-ui/icons/Search";
// import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
// import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";

import NumberFormat from "react-number-format";
import round from "lodash/round";
import MaterialTable from "material-table";
import { DENSE_VELDSPAR } from "../helpers/minerals";
// import MineralSection from "../components/mineralSection/MineralSection";

class Home extends React.Component {
  state = {
    pricesRangesReady: false,
    numberOfRows: 10,
    taxRate: 5,
    brokerFeeRatio: 4,
    minerals: {
      denseVeldspar: {
        name: DENSE_VELDSPAR,
        priceStep: 0.5,
        pricesRange: [],
        rows: [],
        rowValues: {
          rawminUnitVolume: 0.1,
          shipVolume: 46200,
          rawminBuyPrice: 10,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.15,
          cminVolume: 0.15,
          cminQty: 0,
          cminSellPrice: 2048,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0
        }
      }
    }
  };

  // ---------------------------------------------------------------------- lifecycle
  componentDidMount() {
    const priceRange = this.generateBuyPriceRagne(DENSE_VELDSPAR);

    const newProps = {
      pricesRange: [...priceRange]
    };
    this.updateMineral({ updater: newProps, mineralName: DENSE_VELDSPAR });
  }

  // ---------------------------------------------------------------------- helpers
  updateMineral = ({ updater, mineralName }) => {
    const { minerals } = this.state;
    const newState = {
      minerals: {
        ...minerals,
        [mineralName]: {
          ...minerals[mineralName],
          ...updater
        }
      }
    };
    this.setState({ ...newState }, () => console.log({ newState: this.state }));
  };

  generateBuyPriceRagne = mineral => {
    const { numberOfRows, minerals } = this.state;
    const {
      rowValues: { rawminBuyPrice },
      priceStep
    } = minerals[mineral];
    const range = Array.from({ length: numberOfRows }, (v, k) => k + 1);
    const pricesRange = range.reduce(
      (acc, _) => {
        const lastPrice = acc[acc.length - 1];
        const nextPrice = lastPrice + priceStep;
        acc.push(nextPrice);
        return acc;
      },
      [rawminBuyPrice]
    );

    return pricesRange;
  };

  generateRows = mineralName => {
    const { minerals, taxRate, brokerFeeRatio } = this.state;
    const pricesRange = this.generateBuyPriceRagne(mineralName);
    const { rowValues } = minerals[mineralName];
    const {
      cminSellPrice,
      rawminUnitVolume,
      shipVolume,
      cminUnitVolume
    } = rowValues;

    const rows = pricesRange.map(rawminBuyPrice => {
      const rawminTotalCost = (shipVolume / rawminUnitVolume) * rawminBuyPrice;
      const rawminQty = shipVolume / rawminUnitVolume;

      const cminQty = rawminQty / 100;
      const cminVolume = cminQty * cminUnitVolume;
      const grosProfit = cminQty * cminSellPrice;
      const brokerFee = -(grosProfit * (brokerFeeRatio / 100));
      const tax = -(grosProfit * (taxRate / 100));
      const netProfit = grosProfit + brokerFee + tax;
      const profit = netProfit - rawminTotalCost;
      const profitP = (profit / rawminTotalCost) * 100;

      return {
        rawminUnitVolume: rawminUnitVolume,
        shipVolume: shipVolume,
        rawminBuyPrice: rawminBuyPrice,
        rawminQty: rawminQty,
        rawminTotalCost: rawminTotalCost,
        cminUnitVolume: cminUnitVolume,
        cminVolume: cminVolume,
        cminQty: cminQty,
        cminSellPrice: cminSellPrice,
        grosProfit: grosProfit,
        brokerFee: brokerFee,
        tax: tax,
        netProfit: netProfit,
        profit: profit,
        profitP: profitP
      };
    });
    // console.log("new rows generated", { rows, pricesRange });
    return rows;
  };

  selectFormat = length => {
    switch (length) {
      case 2:
        return "##";
      case 3:
        return "###";
      case 4:
        return "# ###";
      case 5:
        return "## ###";
      case 6:
        return "### ###";
      case 7:
        return "# ### ###";
      case 8:
        return "## ### ###";
      case 9:
        return "### ### ###";
      case 10:
        return "# ### ### ###";
      default:
        return "##############";
    }
  };

  // ---------------------------------------------------------------------- handlers
  handleSellPriceChange = (event, mineralName) => {
    const rowValues = this.state.minerals[mineralName].rowValues;
    const value = event.target.value;
    this.updateMineral({
      mineralName: mineralName,
      updater: {
        rowValues: {
          ...rowValues,
          cminSellPrice: +value
        }
      }
    });
  };

  handleBuyPriceChange = (event, mineralName) => {
    const rowValues = this.state.minerals[mineralName].rowValues;
    const value = event.target.value;
    this.updateMineral({
      mineralName: mineralName,
      updater: {
        rowValues: {
          ...rowValues,
          rawminBuyPrice: +value
        }
      }
    });
  };

  handleBrokerFeeChane = event => {
    const value = event.target.value;
    this.setState({ brokerFeeRatio: +value });
  };

  handleTaxChane = event => {
    const value = event.target.value;
    this.setState({ taxRate: +value });
  };

  // ---------------------------------------------------------------------- table props
  icons = {
    Check: Check,
    DetailPanel: ChevronRight,
    Export: SaveAlt,
    Filter: FilterList,
    FirstPage: FirstPage,
    LastPage: LastPage,
    NextPage: ChevronRight,
    PreviousPage: ChevronLeft,
    Search: Search,
    ThirdStateCheck: Remove
  };

  columns = [
    {
      title: "Volume",
      field: "rawminUnitVolume",
      type: "numeric",
      editable: "never"
    },
    {
      title: "Ship volume",
      field: "shipVolume",
      type: "numeric",
      editable: "never"
    },
    { title: "Buy price", field: "rawminBuyPrice", editable: "always" },
    {
      title: "Dense Veldspar Qty",
      field: "rawminQty",
      editable: "always"
    },
    {
      title: "Total cost",
      field: "rawminTotalCost",
      editable: "never",
      render: props => {
        const value = round(props.rawminTotalCost, 0);
        const length = value.toString().length;
        const format = this.selectFormat(length);
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            format={format.trim()}
            thousandSeparator={true}
            prefix={"ISK "}
          />
        );
      }
    },
    { title: "Compressed V", field: "cminUnitVolume", editable: "never" },
    {
      title: "After compression",
      field: "cminVolume",
      editable: "never"
    },
    {
      title: "compressed mineral Qty",
      field: "cminQty",
      editable: "never"
    },
    {
      title: "Sell price",
      field: "cminSellPrice",
      editable: "never"
    },
    {
      title: "Gross profit",
      field: "grosProfit",
      editable: "never",
      render: props => {
        const value = round(props.grosProfit, 0);
        const length = value.toString().length;
        const format = this.selectFormat(length);
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            format={format.trim()}
            thousandSeparator={true}
            prefix={"ISK "}
          />
        );
      }
    },
    {
      title: "Broker fee",
      field: "brokerFee",
      editable: "never",
      render: props => {
        const value = round(props.brokerFee, 0);
        const length = value.toString().length;
        const format = this.selectFormat(length);
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            format={format.trim()}
            thousandSeparator={true}
            prefix={"ISK "}
          />
        );
      }
    },
    {
      title: "Tax",
      field: "tax",
      editable: "never",
      render: props => {
        const value = round(props.tax, 0);
        const length = value.toString().length;
        const format = this.selectFormat(length);
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            format={format.trim()}
            thousandSeparator={true}
            prefix={"ISK "}
          />
        );
      }
    },
    {
      title: "Net profit",
      field: "netProfit",
      editable: "never",
      render: props => {
        const value = round(props.netProfit, 0);
        const length = value.toString().length;
        const format = this.selectFormat(length);
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            format={format.trim()}
            thousandSeparator={true}
            prefix={"ISK "}
          />
        );
      }
    },
    {
      title: "Profit",
      field: "profit",
      editable: "never",
      render: props => {
        const value = round(props.profit, 0);
        const length = value.toString().length;
        const format = this.selectFormat(length);
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            format={format.trim()}
            thousandSeparator={true}
          />
        );
      }
    },
    {
      title: "Profit %",
      field: "profitP",
      editable: "never",
      render: props => round(props.profitP, 1) + "%"
    }
  ];

  options = {
    search: false,
    padding: "dense",
    sorting: false,
    pageSize: 10
  };

  render() {
    const { rowValues, name } = this.state.minerals[DENSE_VELDSPAR] || [];
    const { rawminBuyPrice, cminSellPrice } = rowValues;
    const rows = this.generateRows(name);
    return (
      <>
        <div>
          <span>Broker fee</span>
          <input
            key="brokerFeeRatio"
            type="text"
            onChange={this.handleBrokerFeeChane}
            value={this.state.brokerFeeRatio}
          />
          <span>taxRate</span>
          <input
            key="taxRate"
            type="text"
            onChange={this.handleTaxChane}
            value={this.state.taxRate}
          />
        </div>
        <div>
          <span>Buy price</span>
          <input
            key="buyprice"
            type="text"
            value={rawminBuyPrice}
            onChange={event => this.handleBuyPriceChange(event, name)}
          />
          <span>Sell price</span>
          <input
            key="sellprice"
            type="text"
            value={cminSellPrice}
            onChange={event => this.handleSellPriceChange(event, name)}
          />
          <MaterialTable
            title="dense veldspar"
            columns={this.columns}
            data={rows}
            icons={this.icons}
            options={this.options}
            components={{
              Pagination: () => null
            }}
          />
        </div>
      </>
    );
  }
}

export default Home;
