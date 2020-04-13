import { styled } from "@material-ui/core/styles";

export const Section = styled("div")({
  background: "#f8f8f9;",
  border: 0,
  borderRadius: 3,
  // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  margin: "30px 5px",
  padding: 5,
});

export const Settings = styled("div")({
  color: "black",
  margin: "6px 5px",
});

export const SettingsValue = styled("span")({
  color: "black",
  margin: "6px 5px",
});

export const MTableInfoLabel = styled("span")({
  color: "black",
  margin: "6px 2px 6px 0px",
});
export const MTableInfoValue = styled("span")({
  color: "#007cfb",
  margin: "6px 30px 6px 0px",
});

export const BasicInfo = styled("div")({
  fontSize: "14px",
  padding: "15px",
});

export const GoodProfit = styled("span")({
  background: "#01d601",
  width: "50%",
  textAlign: "center",
  display: "inline-block",
});

export const LossProfit = styled("span")({
  background: "red",
  width: "50%",
  textAlign: "center",
  display: "inline-block",
});

export const TableTitle = styled("span")({
  fontWeight: "bold",
  marginRight: "20px",
  color: "red",
});
