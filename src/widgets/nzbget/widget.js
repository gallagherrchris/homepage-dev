import jsonrpcProxyHandler from "utils/proxy/handlers/jsonrpc";

const widget = {
  api: "{url}/jsonrpc",
  proxyHandler: jsonrpcProxyHandler,
  providerOverrides: ["username", "password"]
};

export default widget;
