import credentialedProxyHandler from "utils/proxy/handlers/credentialed";
import { asJson, jsonArrayFilter } from "utils/proxy/api-helpers";

const widget = {
  api: "{url}/api/v2.0/{endpoint}",
  proxyHandler: credentialedProxyHandler,
  providerOverrides: ["username", "password", "key"],

  mappings: {
    alerts: {
      endpoint: "alert/list",
      map: (data) => ({
        pending: jsonArrayFilter(data, (item) => item?.dismissed === false).length,
      }),
    },
    status: {
      endpoint: "system/info",
      validate: ["loadavg", "uptime_seconds"],
    },
    pools: {
      endpoint: "pool",
      map: (data) =>
        asJson(data).map((entry) => ({
          id: entry.name,
          name: entry.name,
          healthy: entry.healthy,
        })),
    },
    dataset: {
      endpoint: "pool/dataset",
    },
  },
};

export default widget;
