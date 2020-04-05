import React from "react";
// import NumberFormat from "react-number-format";
// import round from "lodash/round";
// import MaterialTable, { MTableToolbar } from "material-table";
import { SCORDITE, DENSE_VELDSPAR, VELDSPAR } from "../helpers/minerals";
import MineralSection from "../components/home/mineralSection/MineralSection";

class Home extends React.Component {
  state = {
    pricesRangesReady: false,
    numberOfRows: 10,
    taxRate: 5,
    brokerFeeRate: 4,
    minerals: {
      [DENSE_VELDSPAR]: {
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
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 2048,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
      [VELDSPAR]: {
        name: VELDSPAR,
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
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 2222,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
      [SCORDITE]: {
        name: SCORDITE,
        priceStep: 0.5,
        pricesRange: [],
        rows: [],
        rowValues: {
          rawminUnitVolume: 0.15,
          shipVolume: 46200,
          rawminBuyPrice: 10,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.19,
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 2222,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
    },
  };

  // ---------------------------------------------------------------------- lifecycle
  componentDidMount() {
    const priceRange = this.generateBuyPriceRagne(DENSE_VELDSPAR);

    const newProps = {
      pricesRange: [...priceRange],
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
          ...updater,
        },
      },
    };
    this.setState({ ...newState }, () => console.log({ newState: this.state }));
  };

  generateBuyPriceRagne = (mineral) => {
    const { numberOfRows, minerals } = this.state;
    const {
      rowValues: { rawminBuyPrice },
      priceStep,
    } = minerals[mineral];
    const range = Array.from({ length: numberOfRows }, (v, k) => k + 1);
    const pricesRange = range.reduce(
      (acc, _) => {
        const lastPrice = acc[acc.length - 1];
        const nextPrice = lastPrice + parseFloat(priceStep);
        acc.push(nextPrice);
        return acc;
      },
      [parseFloat(rawminBuyPrice)]
    );

    return pricesRange;
  };

  generateRows = (mineralName) => {
    const { minerals, taxRate, brokerFeeRate } = this.state;
    const pricesRange = this.generateBuyPriceRagne(mineralName);
    const { rowValues } = minerals[mineralName];
    const {
      cminSellPrice,
      rawminUnitVolume,
      shipVolume,
      cminUnitVolume,
    } = rowValues;

    const rows = pricesRange.map((rawminBuyPrice) => {
      const rawminTotalCost =
        (shipVolume / rawminUnitVolume) * parseFloat(rawminBuyPrice);
      const rawminQty = shipVolume / rawminUnitVolume;

      const cminQty = rawminQty / 100;
      const cminVolume = cminQty * cminUnitVolume;
      const grosProfit = cminQty * cminSellPrice;
      const brokerFee = -(grosProfit * (parseFloat(brokerFeeRate) / 100));
      const tax = -(grosProfit * (parseFloat(taxRate) / 100));
      const netProfit = grosProfit + brokerFee + tax;
      const profit = netProfit - rawminTotalCost;
      const profitP = (profit / rawminTotalCost) * 100;

      return {
        rawminUnitVolume: rawminUnitVolume,
        shipVolume: shipVolume,
        rawminBuyPrice: parseFloat(rawminBuyPrice),
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
        profitP: profitP,
      };
    });
    // console.log("new rows generated", { rows, pricesRange });
    return rows;
  };

  selectFormat = (length) => {
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
          cminSellPrice: value,
        },
      },
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
          rawminBuyPrice: value,
        },
      },
    });
  };

  handleBrokerFeeChane = (event) => {
    const value = event.target.value;
    this.setState({ brokerFeeRate: value });
  };

  handleTaxChane = (event) => {
    const value = event.target.value;
    this.setState({ taxRate: value });
  };

  render() {
    const { taxRate, brokerFeeRate, minerals } = this.state;
    const { handleBuyPriceChange, handleSellPriceChange } = this;
    const { rowValues /* , name */ } = minerals[DENSE_VELDSPAR] || [];
    const { rawminBuyPrice, cminSellPrice } = rowValues;
    // const rows = this.generateRows(name);
    return (
      <>
        <div>
          <span>Broker fee</span>
          <input
            key="brokerFeeRate"
            type="text"
            onChange={this.handleBrokerFeeChane}
            value={this.state.brokerFeeRate}
          />
          <span>taxRate</span>
          <input
            key="taxRate"
            type="text"
            onChange={this.handleTaxChane}
            value={this.state.taxRate}
          />
        </div>
        {Object.values(minerals).map((mineral) => {
          console.log(mineral);
          return (
            <MineralSection
              {...{
                mineralData: mineral,
                taxRate,
                brokerFeeRate,
                rawminBuyPrice,
                cminSellPrice,
                handleBuyPriceChange,
                handleSellPriceChange,
              }}
            />
          );
        })}
      </>
    );
  }
}

export default Home;
