import React from "react";
import newEdenInventoryList from "../../assets/newEdenBaseData/inventory/newEdenInventoryList";
import RadioSection from "../../components/profits/radioSection/RadioSection";

class RawToComppressedOres extends React.Component {
  state = {
    onlyOres: [],
    mainJitaStation: {
      id: 60003760,
      name: "Jita IV - Moon 4 - Caldari Navy Assembly Plant",
    },
  };

  componentDidMount() {
    const onlyOres = Object.fromEntries(
      Object.entries(newEdenInventoryList).filter(
        ([key, value]) => value.type === "ore"
      )
    );
    const divided = this.filterUncompressedOre(onlyOres);
    this.setState({ onlyOres, divided });
  }

  filterUncompressedOre = (oreList) => {
    const result = Object.entries(oreList).reduce((acc, [key, oreItem]) => {
      const ores = oreItem.list;

      const compressedReg = new RegExp("COMPRESSED");
      const nameRegExp = new RegExp(`${key.toUpperCase()}`);

      const uncompressed = ores.filter(
        (ore) =>
          !compressedReg.test(ore.name.toUpperCase()) &&
          nameRegExp.test(ore.name.toUpperCase())
      );

      const compressed = ores.filter((ore) =>
        compressedReg.test(ore.name.toUpperCase())
      );

      console.log({ uncompressed, compressed });
      acc.push({ name: key, uncompressed, compressed });
      return acc;
    }, []);
    return result;
  };

  oreOrders = () => {
    const params = {
      inventoryList: [],
      orderType: "all",
      // callback: filterBestProfit([]),
    };
  };

  render() {
    return <div>aaaa</div>;
  }
}

export default RawToComppressedOres;
