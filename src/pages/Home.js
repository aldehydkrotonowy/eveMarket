import React from "react";

import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
// import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";

import MaterialTable from "material-table";
// import MineralSection from "../components/mineralSection/MineralSection";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    numberOfRows: 10,
    minerals: {
      denseVeldspar: {
        name: "denseVeldspar",
        priceStep: 0.5,
        startPrice: 10,
        pricesRange: [],
        rows: [],
        defaultRowValues: {
          volume: 0.1,
          shipVolume: 46200,
          buyPrice: 0,
          denseVeldsparQty: 0,
          totalValue: 0,
          compressedVolume: 0.15,
          sellPrice: 0,
          grosProfit: 0,
          brockerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0
        }
      }
    }
  };

  componentDidMount() {
    this.generateBuyPriceRagne("denseVeldspar");
    this.generateRows("denseVeldspar");
  }

  generateBuyPriceRagne = mineral => {
    const { numberOfRows, minerals } = this.state;
    const { startPrice, priceStep } = minerals[mineral];
    const range = Array.from({ length: numberOfRows }, (v, k) => k + 1);
    const pricesRange = range.reduce(
      (acc, _) => {
        const lastPrice = acc[acc.length - 1];
        const nextPrice = lastPrice + priceStep;
        acc.push(nextPrice);
        return acc;
      },
      [startPrice]
    );
    const newState = {
      minerals: {
        ...minerals,
        [mineral]: {
          ...minerals[mineral],
          pricesRange: [...pricesRange]
        }
      }
    };
    console.log({ newState });
    this.setState({ minerals: { ...newState } }, () => {
      console.log("after", this.state);
    });
  };

  generateRows = mineralName => {
    const { minerals } = this.state;
    const { pricesRange, defaultRowValues } = minerals[mineralName];
    const rows = pricesRange.map(price => ({
      ...defaultRowValues,
      buyPrice: price
    }));

    this.setState({
      minerals: {
        ...minerals,
        [mineralName]: {
          ...minerals[mineralName],
          rows: [...rows]
        }
      }
    });
  };

  handleSellPriceChange = (event, mineralName) => {
    const value = event.target.value;
    const mineral = this.state.minerals[mineralName];
    this.setState({
      minerals: {
        ...minerals,
        [mineral]: {
          ...minerals[mineral],
          startPrice: parseInt(value)
        }
      }
    });
  };

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
    { title: "Volume", field: "volume", type: "numeric", editable: "never" },
    {
      title: "Ship volume",
      field: "shipVolume",
      type: "numeric",
      editable: "never"
    },
    { title: "Buy price", field: "buyPrice", editable: "always" },
    {
      title: "Dense Veldspar Qty",
      field: "denseVeldsparQty",
      editable: "always"
    },
    { title: "Total value", field: "totalValue", editable: "never" },
    { title: "Compressed V", field: "compressedVolume", editable: "never" },
    { title: "Sell price", field: "sellPrice", editable: "never" },
    { title: "Gross profit", field: "grosProfit", editable: "never" },
    { title: "Broker fee", field: "brockerFee", editable: "never" },
    { title: "Tax", field: "tax", editable: "never" },
    { title: "Net profit", field: "netProfit", editable: "never" },
    { title: "Profit", field: "profit", editable: "never" },
    { title: "Profit %", field: "profitP", editable: "never" }
  ];

  options = {
    search: false,
    padding: "dense",
    sorting: false,
    pageSize: 10
  };
  render() {
    return (
      <>
        <div>
          <span>Broker fee</span>
          <input type="text"></input>
          <span>Tax</span>
          <input type="text"></input>
          <span>Buy price</span>
          <input type="text"></input>
          <span>Sell price</span>
          <input type="text" onChange={event => this.handleSellPriceChange(event, "denseVeldspar")}></input>
        </div>
        {/* <MineralSection columns={this.columns} /> */}
        <MaterialTable
          title="dense veldspar"
          columns={this.columns}
          data={[]}
          icons={this.icons}
          options={this.options}
          components={{
            Pagination: () => null
          }}
        />
      </>
    );
  }
}

export default Home;
