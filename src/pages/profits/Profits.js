import React from "react";
import { minerals } from "../../assets/minerals";
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
