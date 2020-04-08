import React from "react";
import { ExplanationText, Status, Wrapper } from "./styles";

const Legend = () => {
  return (
    <Wrapper>
      <Status>S -</Status>
      <ExplanationText>Sold</ExplanationText>
      <Status>H -</Status>
      <ExplanationText>in hangar</ExplanationText>
      <Status>M -</Status>
      <ExplanationText>waiting on market</ExplanationText>
      <Status>Q -</Status>
      <ExplanationText>bring to Jita</ExplanationText>
    </Wrapper>
  );
};

export default Legend;
