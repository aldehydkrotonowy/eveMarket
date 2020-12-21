import React from "react";
import newEdenInventoryList from "../../assets/newEdenBaseData/inventory/newEdenInventoryList";
import RadioSection from "../../components/profits/radioSection/RadioSection";
import inventoryOrderService from "../../services/inventoryOrderService";
import buySellDiff from "../../utils/buySellDiff";
import { arrayToChunks } from "../../utils/utils";
import icons from "../../components/shared/materialTableIcons";
import MaterialTable from "material-table";

class MarketState extends React.Component {
  state = {
    radioSelected: "",
  };
  columns = [
    {
      name: "Name",
      field: "name",
    },
    {
      name: "Ship V",
      field: "shipVol",
    },
    {
      name: "Item V",
      field: "itemVol",
    },
    {
      name: "Course Qty",
      field: "courseQty",
    },
    {
      name: "Course Value",
      field: "courseValue",
    },
    {
      name: "Courses",
      field: "courses",
    },
    {
      name: "Sell sec",
      field: "sellSec",
    },
    {
      name: "Sell sys",
      field: "sellSys",
    },
    {
      name: "Sell reg",
      field: "sellReg",
    },
    {
      name: "Sell duration",
      field: "sellDur",
    },
    {
      name: "Sell price",
      field: "sellPrice",
    },
    {
      name: "Sell qty",
      field: "sellQty",
    },
    {
      name: "Buyvvvv sec",
      field: "buySec",
    },
    {
      name: "Buy sys",
      field: "buySys",
    },
    {
      name: "Buy reg",
      field: "buyReg",
    },
    {
      name: "Buy duration",
      field: "buyDur",
    },
    {
      name: "Buy price",
      field: "buyPrice",
    },
    {
      name: "Buy qty",
      field: "buyQty",
    },
    {
      name: "Course Profit",
      field: "profitPerCourse",
    },
    {
      name: "Max Profit",
      field: "profitMax",
    },
  ];

  tableOptions = {
    search: false,
    padding: "dense",
    pageSize: 10,
    sorting: false,
    showTitle: false,
  };

  componentDidMount() {
    const elsInColumn = 7;
    const itemsList = Object.keys(newEdenInventoryList);

    const chunks = arrayToChunks(itemsList, elsInColumn);
    this.setState({ radioSectionItems: chunks });
  }

  handleRadioChange = async (event) => {
    const { value: inventoryType } = event.currentTarget;
    this.setState({ radioSelected: inventoryType });
    const inventoryTypeList = newEdenInventoryList[inventoryType].list;
    const inventoryVolume = newEdenInventoryList[inventoryType].itemVolume;
    const invenotryKind = newEdenInventoryList[inventoryType].type;

    const config = {
      profitAbove: 1000000,
    };

    const filterBestProfit = (orderList) => (marketOrders) =>
      buySellDiff(orderList, marketOrders, config);

    const params = {
      inventoryList: inventoryTypeList,
      orderType: "all",
      callback: filterBestProfit(inventoryTypeList),
    };

    const orders = await inventoryOrderService(params);

    let shipVol = 0;
    switch (invenotryKind) {
      case "item":
        shipVol = 1057;
        break;
      case "ore":
        shipVol = 46200;
        break;
      default:
        shipVol = 1057;
    }

    const tableData = Object.entries(orders).map(([key, value]) => {
      const { bestBuy, bestSell, profit } = value;

      const qtyToTransport = Math.min(
        bestSell.volume_remain,
        bestBuy.volume_remain
      );

      const maxQtyShipCanTakeAtOnce = Math.floor(shipVol / inventoryVolume);

      let shipValue = 0;
      let itemQtyShipActuallyTakesAtOnce = 0;
      if (qtyToTransport < maxQtyShipCanTakeAtOnce) {
        shipValue = qtyToTransport * bestSell.price;
        itemQtyShipActuallyTakesAtOnce = qtyToTransport;
      } else {
        shipValue = maxQtyShipCanTakeAtOnce * bestSell.price;
        itemQtyShipActuallyTakesAtOnce = maxQtyShipCanTakeAtOnce;
      }

      const numberOfShipCourses = Math.ceil(
        qtyToTransport / maxQtyShipCanTakeAtOnce
      );
      const upgradedProfit = profit > 10000000 ? profit + " +" : profit;

      const row = {
        name: key,

        shipVol: shipVol,
        maxShipCpc: maxQtyShipCanTakeAtOnce,
        inCargo: itemQtyShipActuallyTakesAtOnce,
        courseValue: shipValue,
        courses: numberOfShipCourses,
        itemV: inventoryVolume,

        sellSec: bestSell.securityStatus,
        sellSys: bestSell.systemName,
        // sellReg: bestSell.regionName,
        sellDur: bestSell.duration,
        sellPrice: bestSell.price,
        sellVol: bestSell.volume_remain,

        buySec: bestBuy.securityStatus,
        buySys: bestBuy.systemName,
        // buyReg: bestBuy.regionName,
        buyDur: bestBuy.duration,
        buyPrice: bestBuy.price,
        buyVol: bestBuy.volume_remain,

        profitPerCourse: profit / numberOfShipCourses,
        profit: upgradedProfit,
      };
      return row;
    });
    console.table(tableData);
  };

  render() {
    return (
      <>
        <RadioSection
          items={this.state.radioSectionItems}
          onRadioChange={this.handleRadioChange}
          selected={this.state.radioSelected}
        />
        {/* <MaterialTable
          columns={this.columns}
          data={[]}
          options={this.tableOptions}
          icons={icons}
        /> */}
      </>
    );
  }
}

export default MarketState;
