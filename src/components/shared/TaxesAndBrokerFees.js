import React from "react";
import { BROKER_FEE_RATE, TAX_RATE } from "../../helpers/minerals";
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

const TaxesAndBrokerFees = () => {
  return (
    <InfoWrapper>
      <BrokerLabel>Jita broker Precise Fee</BrokerLabel>
      <BrokerValue>{BROKER_FEE_RATE}</BrokerValue>
      <TaxLabel>Jita tax fee</TaxLabel>
      <TaxValue>{TAX_RATE}</TaxValue>
    </InfoWrapper>
  );
};

export default TaxesAndBrokerFees;
