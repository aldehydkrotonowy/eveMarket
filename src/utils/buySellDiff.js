import { round } from "lodash";

const sellBuyDiff = (itemList, marketOrders) =>
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

    const bestSell = sellAsc[0];
    const bestBuy = buyDesc[0];

    const smollerVolumeRemain = Math.min(
      bestSell.volume_remain,
      bestBuy.volume_remain
    );

    const toInvest = smollerVolumeRemain * bestSell.price;
    const toEarn = smollerVolumeRemain * bestBuy.price;
    const profit = round(toEarn - toInvest, 2);

    acc[name] = { bestSell, bestBuy, profit };
    return acc;
  }, {});

export default sellBuyDiff;
