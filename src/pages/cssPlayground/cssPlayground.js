import React from "react";
import { styled } from "@material-ui/core/styles";
import { inventoryOrdersService } from "../../services/inventoryOrderService";
import "./test.css";

const GlassElement = styled("div")({
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(5px)",
});

class CssPlayground extends React.Component {
  state = {
    charges: [
      {
        id: 238,
        name: "Antimatter Charge L",
      },
      {
        id: 230,
        name: "Antimatter Charge M",
      },
      {
        id: 222,
        name: "Antimatter Charge S",
      },
    ],
    regions: [
      {
        id: 10000020,
        name: "Tash-Murkon",
      },
      {
        id: 10000038,
        name: "The Bleak Lands",
      },
      {
        id: 10000033,
        name: "The Citadel",
      },
      {
        id: 10000002,
        name: "The Forge",
      },
      {
        id: 10000068,
        name: "Verge Vendor",
      },
    ],
  };

  componentDidMount() {
    const { charges, regions } = this.state;
    const urls = inventoryOrdersService({
      regionList: regions,
      inventoryList: charges,
      orderType: "buy",
    });
    console.log(urls);
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
