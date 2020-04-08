import React from "react";
// import round from "lodash/round";
// import MaterialTable, { MTableToolbar } from "material-table";
import {
  SCORDITE,
  DENSE_VELDSPAR,
  VELDSPAR,
  CONDENSED_SCORDITE,
  AZURE_PLAGIOCLASE,
} from "../helpers/minerals";
import MineralSection from "../components/home/mineralSection/MineralSection";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../shared/TabPanel";
import { styled } from "@material-ui/core/styles";

const InfoWrapper = styled("div")({
  padding: "15px",
  fontSize: "14px",
});
const TaxLabel = styled("span")({
  color: "black",
  margin: "6px 2px 6px 0px",
});
const TaxValue = styled("span")({
  color: "#007cfb",
  margin: "6px 30px 6px 0px",
});
const BrokerLabel = styled("span")({
  color: "black",
  margin: "6px 5px",
});
const BrokerValue = styled("span")({
  color: "#007cfb",
  margin: "6px 5px",
});

class Home extends React.Component {
  state = {
    selectedTab: 0,
    pricesRangesReady: false,
    taxRate: 0.05,
    brokerFeeRate: 0.04404193632,
    minerals: {
      [VELDSPAR]: {
        name: VELDSPAR,
        priceStep: 2,
        fromBuyPrice: 16,
        toBuyPrice: 40,
        pricesRange: [],
        rowValues: {
          rawminUnitVolume: 0.1,
          shipVolume: 46200,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.15,
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 2800,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
      [DENSE_VELDSPAR]: {
        name: DENSE_VELDSPAR,
        priceStep: 2,
        fromBuyPrice: 16,
        toBuyPrice: 40,
        pricesRange: [],
        rowValues: {
          rawminUnitVolume: 0.1,
          shipVolume: 46200,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.15,
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 4600,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
      [SCORDITE]: {
        name: SCORDITE,
        priceStep: 2,
        fromBuyPrice: 16,
        toBuyPrice: 40,
        pricesRange: [],
        rowValues: {
          rawminUnitVolume: 0.15,
          shipVolume: 46200,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.19,
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 3700,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
      [CONDENSED_SCORDITE]: {
        name: CONDENSED_SCORDITE,
        priceStep: 1,
        fromBuyPrice: 16,
        toBuyPrice: 40,
        pricesRange: [],
        rowValues: {
          rawminUnitVolume: 0.15,
          shipVolume: 46200,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.19,
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 5200,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
      [AZURE_PLAGIOCLASE]: {
        name: AZURE_PLAGIOCLASE,
        priceStep: 1,
        fromBuyPrice: 10,
        toBuyPrice: 60,
        pricesRange: [],
        rowValues: {
          rawminUnitVolume: 0.35,
          shipVolume: 46200,
          rawminQty: 0,
          rawminTotalCost: 0,
          cminUnitVolume: 0.15,
          cminVolume: 0,
          cminQty: 0,
          cminSellPrice: 8200,
          grosProfit: 0,
          brokerFee: 0,
          tax: 0,
          netProfit: 0,
          profit: 0,
          profitP: 0,
        },
      },
    },
  };

  // ---------------------------------------------------------------------- lifecycle
  componentDidMount() {
    const priceRange = this.generateBuyPriceRagne();

    priceRange.forEach((rangeForMineral) => {
      const newProps = {
        pricesRange: [...rangeForMineral.range],
      };

      setTimeout(() => {
        this.updateMineral({
          updater: newProps,
          mineralName: rangeForMineral.name,
        });
      }, 10);
    });
  }

  // ---------------------------------------------------------------------- helpers
  updateMineral = ({ updater, mineralName }) => {
    const { minerals } = this.state;
    const newState = {
      minerals: {
        ...minerals,
        [mineralName]: {
          ...minerals[mineralName],
          ...updater,
        },
      },
    };
    this.setState({ ...newState }, () => console.log({ newState: this.state }));
  };

  generateBuyPriceRagne = () => {
    const { minerals } = this.state;
    const pricesRanges = Object.values(minerals).map((mineral) => {
      const { priceStep, fromBuyPrice, toBuyPrice, name } = mineral;

      let range = [fromBuyPrice];
      let currentPrice = fromBuyPrice;
      do {
        currentPrice += priceStep;
        range.push(currentPrice);
      } while (currentPrice <= toBuyPrice);

      return { name: name, range };
    });

    console.log({ pricesRanges });
    return pricesRanges;
  };

  // ---------------------------------------------------------------------- handlers
  handleSellPriceChange = (event, mineralName) => {
    const rowValues = this.state.minerals[mineralName].rowValues;
    const value = event.target.value;
    this.updateMineral({
      mineralName: mineralName,
      updater: {
        rowValues: {
          ...rowValues,
          cminSellPrice: value,
        },
      },
    });
  };

  // handleBuyPriceChange = (event, mineralName) => {
  //   const rowValues = this.state.minerals[mineralName].rowValues;
  //   const value = event.target.value;
  //   this.updateMineral({
  //     mineralName: mineralName,
  //     updater: {
  //       rowValues: {
  //         ...rowValues,
  //         rawminBuyPrice: value,
  //       },
  //     },
  //   });
  // };

  handleBrokerFeeChane = (event) => {
    const value = event.target.value;
    this.setState({ brokerFeeRate: value });
  };

  handleTaxChane = (event) => {
    const value = event.target.value;
    this.setState({ taxRate: value });
  };

  handleTabChange = (event, newValue) => {
    this.setState({ selectedTab: newValue });
  };

  render() {
    const { taxRate, brokerFeeRate, minerals, selectedTab } = this.state;
    const { handleSellPriceChange, handleTabChange } = this;
    return (
      <>
        <AppBar position="static" color="default">
          <InfoWrapper>
            <BrokerLabel>Jita broker Precise Fee</BrokerLabel>
            <BrokerValue>{this.state.brokerFeeRate}</BrokerValue>
            <TaxLabel>Jita tax fee</TaxLabel>
            <TaxValue>{this.state.taxRate}</TaxValue>
          </InfoWrapper>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {Object.values(minerals).map((mineral, index) => {
              return (
                <Tab
                  label={mineral.name}
                  id={`scrollable-force-tab-${index}`} /* icon={<HomeIcon />} {...a11yProps(index)}  */
                />
              );
            })}
          </Tabs>
        </AppBar>

        {Object.values(minerals).map((mineral, index) => {
          return (
            <TabPanel value={selectedTab} index={index}>
              <MineralSection
                {...{
                  mineralData: mineral,
                  taxRate,
                  brokerFeeRate,
                  handleSellPriceChange,
                }}
              />
            </TabPanel>
          );
        })}
      </>
    );
  }
}

export default Home;
