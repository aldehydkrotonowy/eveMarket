import React from "react";
import newEdenInventoryList from "../../assets/newEdenBaseData/inventory/newEdenInventoryList";
import RadioSection from "../../components/profits/radioSection/RadioSection";
import inventoryOrderService from "../../services/inventoryOrderService";
import buySellDiff from "../../utils/buySellDiff";

class MarketState extends React.Component {
  state = {
    radioSelected: "",
  };

  componentDidMount() {
    const radioItems = Object.keys(newEdenInventoryList).map((key) => key);
    this.setState({ radioSectionItems: [radioItems] });
  }

  handleRadioChange = async (event) => {
    const { value } = event.currentTarget;
    this.setState({ radioSelected: value });
    const inventoryTypeList = newEdenInventoryList[value];

    const filterBestProfit = (orderList) => (marketOrders) =>
      buySellDiff(orderList, marketOrders);

    const params = {
      inventoryList: inventoryTypeList,
      orderType: "all",
      callback: filterBestProfit(inventoryTypeList),
    };

    const orders = await inventoryOrderService(params);

    const tableData = Object.entries(orders).map(([key, value]) => {
      const { bestBuy, bestSell, profit } = value;

      const row = {
        name: key,

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
