const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (() => {
  // Get the default Expo configuration
  const config = getDefaultConfig(__dirname);

  // Add support for `.cjs` extensions
  config.resolver.assetExts.push("cjs");

  // Apply NativeWind configuration
  return withNativeWind(config, { input: "./app/global.css" });
})();
