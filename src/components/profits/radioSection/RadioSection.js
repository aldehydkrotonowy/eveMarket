import React from "react";
import { Wrapper, Column, Row } from "./radioSectionStyles";

const RadioSection = (props) => {
  const { items = [], onRadioChange, selected } = props;
  return (
    <Wrapper>
      {items.map((column, index) => (
        <Column key={index}>
          {column.map((name) => (
            <Row key={name}>
              <input
                type="radio"
                name={name}
                value={name}
                checked={selected === name ? true : false}
                onChange={(e) => onRadioChange(e)}
              />
              {name}
            </Row>
          ))}
        </Column>
      ))}
    </Wrapper>
  );
};

export default RadioSection;
