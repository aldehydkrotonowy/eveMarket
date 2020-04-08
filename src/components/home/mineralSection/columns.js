import React from "react";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import { roundedNum } from "../../../utils/utils";
import FormatedNum from "../../../shared/FormatedNum";
import { GoodProfit, LossProfit } from "./style";

export const columns = [
  { title: "Buy price", field: "rawminBuyPrice", editable: "always" },
  {
    title: "Total cost",
    field: "rawminTotalCost",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.rawminTotalCost} precision={0} />;
    },
  },
  {
    title: "After compression",
    field: "cminVolume",
    editable: "never",
  },
  {
    title: "compressed qty",
    field: "cminQty",
    editable: "never",
  },
  {
    title: "Sell price",
    field: "cminSellPrice",
    editable: "never",
  },
  {
    title: "Gross profit",
    field: "grosProfit",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.grosProfit} precision={0} />;
    },
  },
  {
    title: "Broker fee",
    field: "brokerFee",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.brokerFee} precision={0} />;
    },
  },
  {
    title: "Tax",
    field: "tax",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.tax} precision={0} />;
    },
  },
  {
    title: "Net profit",
    field: "netProfit",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.netProfit} precision={0} />;
    },
  },
  {
    title: "Profit",
    field: "profit",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.profit} precision={0} />;
    },
  },
  {
    title: "Profit %",
    field: "profitP",
    editable: "never",
    render: (props) => {
      const value = roundedNum(props.profitP, 2);
      if (value > 10) {
        return <GoodProfit>{value.toFixed(2)}</GoodProfit>;
      } else if (value < 10) {
        return <LossProfit>{value.toFixed(2)}</LossProfit>;
      } else {
        return "?";
      }
    },
  },
];

export const options = {
  search: false,
  padding: "dense",
  sorting: false,
  pageSize: 25,
  showTitle: false,
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
  ThirdStateCheck: Remove,
};
