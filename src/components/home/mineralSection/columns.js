import round from "lodash";

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

export const columns = [
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
      // const length = value.toString().length;
      // const format = this.selectFormat(length);
      return value;
      // <NumberFormat
      //   value={value}
      //   displayType={"text"}
      //   format={format.trim()}
      //   thousandSeparator={true}
      //   prefix={"ISK "}
      // />
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
      // const length = value.toString().length;
      // const format = this.selectFormat(length);
      return value;
    }
  },
  {
    title: "Broker fee",
    field: "brokerFee",
    editable: "never",
    render: props => {
      const value = round(props.brokerFee, 0);
      // const length = value.toString().length;
      // const format = this.selectFormat(length);
      return value;
    }
  },
  {
    title: "Tax",
    field: "tax",
    editable: "never",
    render: props => {
      const value = round(props.tax, 0);
      // const length = value.toString().length;
      // const format = this.selectFormat(length);
      return value;
    }
  },
  {
    title: "Net profit",
    field: "netProfit",
    editable: "never",
    render: props => {
      const value = round(props.netProfit, 0);
      // const length = value.toString().length;
      // const format = this.selectFormat(length);
      return value;
    }
  },
  {
    title: "Profit",
    field: "profit",
    editable: "never",
    render: props => {
      const value = round(props.profit, 0);
      // const length = value.toString().length;
      // const format = this.selectFormat(length);
      return value;
    }
  },
  {
    title: "Profit %",
    field: "profitP",
    editable: "never",
    render: props => round(props.profitP, 1) + "%"
  }
];

export const options = {
  search: false,
  padding: "dense",
  sorting: false,
  pageSize: 10
};

export const icons = {
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
