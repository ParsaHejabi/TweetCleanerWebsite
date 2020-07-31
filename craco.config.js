const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA1F2", "@black": "#14171A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
