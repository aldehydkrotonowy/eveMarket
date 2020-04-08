export const roundedNum = (num, precision) => {
  const modifier = 10 ** precision;
  return Math.round((num + Number.EPSILON) * modifier) / modifier;
};
