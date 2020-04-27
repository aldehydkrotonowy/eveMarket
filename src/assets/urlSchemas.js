const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const ser_ver = `${server}/${version}`;
const typeId = "type_id";
const orderType = "order_type";
const page = "page";

export const urlSchemas = {
  regionsInfo: {
    urlTemplate: `${ser_ver}/universe/regions/__REGION_ID__/?${datasource}&${language}`,
    urlParts: {
      regionId: "__REGION_ID__",
    },
  },
  inventoryMarketDataUrl: {
    urlTemplate: `${ser_ver}/markets/__REGION_ID__/orders/?${datasource}&${orderType}=__ORDER_TYPE__&${page}=__PAGE__&${typeId}=__INVENTORY_ID__`,
    urlParts: {
      regionId: "__REGION_ID__",
      inventoryId: "__INVENTORY_ID__",
      orderType: "__ORDER_TYPE__",
      page: "__PAGE__",
    },
  },
};
