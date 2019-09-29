const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: ["styled-components"],
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web"
    };
    return config;
  }
});
