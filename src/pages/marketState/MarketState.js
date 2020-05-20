import React from "react";
import newEdenInventoryList from "../../assets/newEdenBaseData/inventory/newEdenInventoryList";
import RadioSection from "../../components/profits/radioSection/RadioSection";
import inventoryOrderService from "../../services/inventoryOrderService";
import buySellDiff from "../../utils/buySellDiff";
import { arrayToChunks } from "../../utils/utils";
class MarketState extends React.Component {
  state = {
    radioSelected: "",
  };

  componentDidMount() {
    const elsInColumn = 5;
    const itemsList = Object.keys(newEdenInventoryList);

    const chunks = arrayToChunks(itemsList, elsInColumn);
    this.setState({ radioSectionItems: chunks });
  }

  handleRadioChange = async (event) => {
    const { value: inventoryType } = event.currentTarget;
    this.setState({ radioSelected: inventoryType });
    const inventoryTypeList = newEdenInventoryList[inventoryType].list;
    const inventoryVolume = newEdenInventoryList[inventoryType].itemVolume;

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

    const rawMinerals = ["veldspar", "scordite", "omber"];
    const shipVol = rawMinerals.includes(inventoryType) ? 46200 : 1057;

    const tableData = Object.entries(orders).map(([key, value]) => {
      const { bestBuy, bestSell, profit } = value;

      const row = {
        name: key,

        shipVol: shipVol,
        shipItemAmoutn: Math.floor(shipVol / inventoryVolume),

        sellSec: bestSell.securityStatus,
        sellSys: bestSell.systemName,
        sellReg: bestSell.regionName,
        sellDur: bestSell.duration,
        sellPrice: bestSell.price,
        sellVol: bestSell.volume_remain,

        buySec: bestBuy.securityStatus,
        buySys: bestBuy.systemName,
        buyReg: bestBuy.regionName,
        buyDur: bestBuy.duration,
        buyPrice: bestBuy.price,
        buyVol: bestBuy.volume_remain,

        profit,
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
      </>
    );
  }
}

export default MarketState;
