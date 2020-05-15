import { round, get } from "lodash";

const buySellDiff = (itemList, marketOrders, config) =>
  itemList.reduce((acc, { name }) => {
    const dataForInventory = marketOrders.filter(
      (item) => item.inventoryName === name
    );

    const removeSmallVolume = dataForInventory.filter(
      (order) => order.volume_remain > 1000
    );

    const onlySellOrders = removeSmallVolume.filter(
      (order) => !order.is_buy_order
    );
    const onlyBuyOrders = removeSmallVolume.filter(
      (order) => order.is_buy_order
    );

    const sellAsc = onlySellOrders.sort((s, f) => s.price - f.price);
    const buyDesc = onlyBuyOrders.sort((s, f) => f.price - s.price);

    const bestSell = sellAsc[0] || {};
    const bestBuy = buyDesc[0] || {};

    const bestSellVolumeRemain = get(bestSell, "volume_remain", 0);
    const bestSellPrice = get(bestSell, "price", 0);
    const bestBuyVolumeRemain = get(bestBuy, "volume_remain", 0);
    const bestBuyPrice = get(bestBuy, "price", 0);

    const smollerVolumeRemain = Math.min(
      bestSellVolumeRemain,
      bestBuyVolumeRemain
    );

    const toInvest = smollerVolumeRemain * bestSellPrice;
    const toEarn = smollerVolumeRemain * bestBuyPrice;
    const profit = round(toEarn - toInvest, 0);

    if (profit >= config.profitAbove) {
      acc[name] = { bestSell, bestBuy, profit };
    }

    return acc;
  }, {});

export default buySellDiff;
