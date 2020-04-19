import React from "react";
import regionsList from "../../assets/base/regionsList.json";
import rawOreList from "../../assets/base/rawOreList.json";
import aaaa from "../../assets/base/systemsAndsItsDetails.json";
import bbbb from "../../assets/base/systemsSecAbove0.4.json";

class MarketState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regionList: regionsList,
      rawOreList: rawOreList,
      tst: aaaa,
    };
  }

  render() {
    const i = this.state.tst.find((a) => a.name === "Nifflung");
    console.log(this.state.tst.length, i, bbbb.length);
    return null;
  }
}

export default MarketState;
