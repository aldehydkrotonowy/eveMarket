import React from "react";
import NumberFormat from "react-number-format";

const roundedNum = (num, precision) => {
  const modifier = 10 ** precision;
  return Math.round((num + Number.EPSILON) * modifier) / modifier;
};

// const selectSchema = (length) => {
//   switch (length) {
//     case 2:
//       return "##";
//     case 3:
//       return "###";
//     case 4:
//       return "# ###";
//     case 5:
//       return "## ###";
//     case 6:
//       return "### ###";
//     case 7:
//       return "# ### ###";
//     case 8:
//       return "## ### ###";
//     case 9:
//       return "### ### ###";
//     case 10:
//       return "# ### ### ###";
//     default:
//       return "##############";
//   }
// };

const FormatedNum = (props) => {
  const { value, precision = 2 } = props;

  //   const length = value.toString().length;
  //   const format = selectSchema(length);

  //   const prepareValue = () => {
  //     const [number, fraction] = value.toString().split(".");
  //     const numberLength = number.toString().length;
  //     const formatedNumber = selectSchema(numberLength);
  //     const formatedFraction = "##########";
  //     const result = formatedNumber + "." + formatedFraction;
  //   };

  return (
    <NumberFormat
      value={roundedNum(value, precision).toString()}
      isNumericString={true}
      displayType={"text"}
      //   format={format.trim()}
      thousandSeparator={" "}
      prefix={""}
    />
  );
};

export default FormatedNum;
