import allRegions from "../assets/newEdenBaseData/galaxy/ALLRegionsList.json";

export const getRegionIdList = () => {
  return allRegions.map(({ id }) => id);
};

export const getRegionNameList = () => {
  return allRegions.map(({ name }) => name);
};

export const countRegions = () => {
  return allRegions.length;
};
