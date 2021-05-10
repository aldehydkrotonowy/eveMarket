import { prepareUrl } from "../utils/prepareUrl";

export const inventoryOrdersService = ({
  regionList,
  inventoryList,
  orderType,
}) => {
  const urlSelector = "inventoryMarketDataUrl";

  const urlsList = [];

  regionList.forEach((region) => {
    inventoryList.forEach((inventory) => {
      const data = {
        regionId: region.id,
        inventoryId: inventory.id,
        orderType: orderType,
        page: 1,
      };

      const preparedUrl = prepareUrl(urlSelector, data);

      urlsList.push(preparedUrl);
    });
  });

  return urlsList;
};
