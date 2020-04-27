export const roundedNum = (num, precision) => {
  const modifier = 10 ** precision;
  return Math.round((num + Number.EPSILON) * modifier) / modifier;
};

export const templateReplacer = (stringToModify, replacePairList) => {
  const result = replacePairList.reduce((url, pair) => {
    const [template, value] = pair;
    url = url.replace(template, value);

    return url;
  }, stringToModify);

  return result;
};

export const urlPatternValueMap = (urlPartsObj = {}, dataFillerObj = {}) => {
  const keysList = Object.keys(urlPartsObj).map((key) => key);

  return keysList.map((key) => {
    const pattern = urlPartsObj[key];
    const value = dataFillerObj[key];
    return [pattern, value];
  });
};
