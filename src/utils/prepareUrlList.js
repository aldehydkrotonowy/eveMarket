import { prepareUrl } from "./prepareUrl";

export const prepareUrlList = ({
  regionList,
  inventoryList,
  orderType,
  urlSelector,
}) => {
  const selector = urlSelector || "inventoryMarketDataUrl";

  const urlsList = [];

  regionList.forEach((region) => {
    inventoryList.forEach((inventory) => {
      const data = {
        regionId: region.id,
        inventoryId: inventory.id,
        orderType: orderType,
        page: 1,
      };

      const preparedUrl = prepareUrl(selector, data);

      urlsList.push(preparedUrl);
    });
  });

  return urlsList;
};
