import { prepareUrlList } from "../utils/prepareUrlList";
import allRegions from "../assets/newEdenBaseData/galaxy/ALLRegionsList";
import selectedRegions from "../assets/newEdenBaseData/selectedManually/selectedRegionsList";
import ALLSystemsSelectedProps from "../assets/newEdenBaseData/galaxy/ALLSystemsSelectedProps";
import { fetchDataRecursive } from "../api/api";
import { isEmpty, pick, round } from "lodash";

const inventoryOrderService = async ({
  inventoryList,
  orderType,
  forAllRegions = false,
  callback = (x) => x,
}) => {
  const regionList = forAllRegions ? allRegions : selectedRegions;
  const urlSelector = "inventoryMarketDataUrl";

  const urlList = prepareUrlList({
    regionList,
    inventoryList,
    orderType,
    urlSelector,
  });

  const results = await fetchDataRecursive(urlList);

  const data = results
    .map(({ data }) => data)
    .filter((obj) => !isEmpty(obj))
    .reduce((acc, obj) => acc.concat(obj), []);

  const withNamedSystems = data.map((order) => {
    const system = ALLSystemsSelectedProps.find(
      (sys) => sys.systemId === order.system_id
    );

    const fieldsToPick = ["volume_remain", "price", "duration", "is_buy_order"];
    const pickedFields = pick(order, fieldsToPick);

    const { securityStatus, systemName, regionName } = system;

    pickedFields.securityStatus = securityStatus
      ? round(securityStatus, 2)
      : "not found";
    pickedFields.systemName = systemName || "not found";
    pickedFields.regionName = regionName || "not found";
    pickedFields.inventoryName = inventoryList.find(
      ({ id }) => id === order.type_id
    ).name;
    return pickedFields;
  });

  const removedNoNames = withNamedSystems.filter(
    (order) =>
      order.systemName !== "not found" || order.regionName !== "not found"
  );

  const processed = callback(removedNoNames);
  return processed;
};

export default inventoryOrderService;
