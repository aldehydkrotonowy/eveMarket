import { urlPatternValueMap, templateReplacer } from "./utils";
import { urlSchemas } from "../assets/urlSchemas";

export const prepareUrl = (urlSelector, dataFillerObj) => {
  const { urlTemplate, urlParts } = urlSchemas[urlSelector];

  const patternValueMap = urlPatternValueMap(urlParts, dataFillerObj);

  const filledUrl = templateReplacer(urlTemplate, patternValueMap);
  return filledUrl;
};
