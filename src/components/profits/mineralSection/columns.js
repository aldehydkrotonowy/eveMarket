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
import FormatedNum from "../../shared/FormatedNum";
import {
  ExcelenteProfit,
  GoodProfit,
  MediumProfit,
  BadProfit,
  WeakProfit,
} from "./mineralSectionStyle";

export const columns = [
  {
    title: "Profit %",
    field: "profitP",
    editable: "never",
    render: (props) => {
      const value = roundedNum(props.profitP, 2);
      if (value >= 100) {
        return <ExcelenteProfit>{value.toFixed(2)}</ExcelenteProfit>;
      } else if (value < 100 && value > 60) {
        return <GoodProfit>{value.toFixed(2)}</GoodProfit>;
      } else if (value <= 60 && value > 30) {
        return <MediumProfit>{value.toFixed(2)}</MediumProfit>;
      } else if (value <= 30 && value > 10) {
        return <BadProfit>{value.toFixed(2)}</BadProfit>;
      } else if (value <= 10) {
        return <WeakProfit>{value.toFixed(2)}</WeakProfit>;
      }
    },
  },
  { title: "Buy price", field: "rawminBuyPrice", editable: "always" },
  {
    title: "Total cost",
    field: "uminCost",
    editable: "never",
    render: (props) => {
      return (
        <FormatedNum value={props.uminCost} precision={0} postfix=" ISK" />
      );
    },
  },
  {
    title: "cminVolume",
    field: "cminVolume",
    editable: "never",
    render: (props) => (
      <FormatedNum
        value={props.cminVolume}
        precision={0}
        postfix={
          <>
            <span> m</span>
            <sup>3</sup>
          </>
        }
      />
    ),
  },
  {
    title: "cminQty",
    field: "cminQty",
    editable: "never",
    render: (props) => (
      <FormatedNum value={props.cminQty} precision={0} postfix=" u" />
    ),
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
      return (
        <FormatedNum value={props.grosProfit} precision={0} postfix=" ISK" />
      );
    },
  },
  {
    title: "Broker fee",
    field: "brokerFee",
    editable: "never",
    render: (props) => {
      return (
        <FormatedNum value={props.brokerFee} precision={0} postfix=" ISK" />
      );
    },
  },
  {
    title: "Tax",
    field: "tax",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.tax} precision={0} postfix=" ISK" />;
    },
  },
  {
    title: "Net profit",
    field: "netProfit",
    editable: "never",
    render: (props) => {
      return (
        <FormatedNum value={props.netProfit} precision={0} postfix=" ISK" />
      );
    },
  },
  {
    title: "Profit",
    field: "profit",
    editable: "never",
    render: (props) => {
      return <FormatedNum value={props.profit} precision={0} postfix=" ISK" />;
    },
  },
];

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
