import React from "react";
import NumberFormat from "react-number-format";
import { roundedNum } from "../../utils/utils";

const FormatedNum = (props) => {
  const { value, precision = 2, postfix } = props;

  return (
    <>
      {value ? (
        <>
          <NumberFormat
            value={roundedNum(value, precision).toString()}
            isNumericString={true}
            displayType={"text"}
            thousandSeparator={" "}
            prefix={""}
          />
          {postfix}
        </>
      ) : null}
    </>
  );
};

export default FormatedNum;
