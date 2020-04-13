import React from "react";
import { minerals } from "../../helpers/minerals";
import RadioSection from "../../components/profits/radioSection/RadioSection";
import TaxesAndBrokerFees from "../../components/shared/TaxesAndBrokerFees";
import { mineralDefs } from "./mineralDefs";
import MineralSection from "../../components/profits/mineralSection/MineralSection";

class Profits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioSectionItems: [],
      radioSelected: "Veldspar",
      minerals: {
        ...mineralDefs,
      },
    };
  }

  componentDidMount() {
    const radioItems = Object.values(minerals).reduce((columns, family) => {
      const { normal } = family;
      const mineralsNames = Object.values(normal).map(
        (mineral) => mineral.name
      );
      columns.push(mineralsNames);
      return columns;
    }, []);
    this.setState({ radioSectionItems: radioItems });

    // const priceRange = this.generateBuyPriceRagne();

    // priceRange.forEach((rangeForMineral) => {
    //   const newProps = {
    //     pricesRange: [...rangeForMineral.range],
    //   };
    //   console.log("dddddddddddddddddd");
    //   setTimeout(() => {
    //     this.updateMineral({
    //       updater: newProps,
    //       mineralName: rangeForMineral.name,
    //     });
    //   }, 10);
    // });
  }

  // ---------------------------------------------------------------------- handlers
  handleRadioChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ radioSelected: value });
  };

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

  // generateBuyPriceRagne = () => {
  //   const { minerals } = this.state;
  //   const pricesRanges = Object.values(minerals).map((mineral) => {
  //     const { priceStep, fromBuyPrice, toBuyPrice, name } = mineral;

  //     let range = [fromBuyPrice];
  //     let currentPrice = fromBuyPrice;
  //     do {
  //       currentPrice += priceStep;
  //       range.push(currentPrice);
  //     } while (currentPrice <= toBuyPrice);

  //     return { name: name, range };
  //   });

  //   return pricesRanges;
  // };

  render() {
    const { radioSelected, minerals } = this.state;
    const { handleSellPriceChange } = this;
    return (
      <>
        <RadioSection
          items={this.state.radioSectionItems}
          onRadioChange={this.handleRadioChange}
          selected={this.state.radioSelected}
        />
        <TaxesAndBrokerFees />
        <MineralSection
          mineralData={minerals[radioSelected] || {}}
          {...{
            handleSellPriceChange,
          }}
        />
      </>
    );
  }
}

export default Profits;
