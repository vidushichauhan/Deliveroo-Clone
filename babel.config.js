module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      ["nativewind/babel", { tailwindConfig: "./tailwind.native.config.js" }],
    ]
  };
};
