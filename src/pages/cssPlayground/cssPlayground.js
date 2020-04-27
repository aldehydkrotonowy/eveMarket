import React from "react";
import { styled } from "@material-ui/core/styles";
import { inventoryOrdersService } from "../../services/inventoryOrderService";
import chargesList from "../../assets/newEdenBaseData/inventory/chargesList.json";
import safeRegions from "../../assets/newEdenBaseData/selectedManually/selectedRegionsList.json";
import { fetchDataRecursive } from "../../api/api";
import { isEmpty } from "lodash";
import "./test.css";

const GlassElement = styled("div")({
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(5px)",
});

class CssPlayground extends React.Component {
  componentDidMount() {
    const sellChargesUrls = inventoryOrdersService({
      regionList: safeRegions,
      inventoryList: chargesList,
      orderType: "all",
    });

    fetchDataRecursive(sellChargesUrls, []).then((values) => {
      const data = values
        .map(({ data }) => data)
        .filter((obj) => !isEmpty(obj))
        .reduce((acc, obj) => acc.concat(obj), []);

      // const withNamedSystems = data.map((order) => {
      //   const system = jsonSafeSystemsList.find(
      //     (sys) => sys.systemId === order.system_id
      //   );

      //   const fieldsToPick = [
      //     "volume_remain",
      //     "price",
      //     "duration",
      //     "is_buy_order",
      //   ];
      //   const pickedFields = pick(order, fieldsToPick);

      //   pickedFields.systemName = system ? system.systemName : "not found";
      //   pickedFields.regionName = system ? system.regionName : "not found";
      //   pickedFields.inventoryName = jsonItemsList.find(
      //     ({ id }) => id === order.type_id
      //   ).name;
      //   return pickedFields;
      // });

      this.setState({ data });
      console.log({ chargesSell: data });
    });
  }

  render() {
    return (
      <GlassElement>
        <div className="glass">dksfksajfkjaksdj</div>
      </GlassElement>
    );
  }
}

export default CssPlayground;
