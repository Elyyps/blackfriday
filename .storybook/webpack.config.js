const path = require("path");
const webpack = require("webpack");

const root = pathToResolve => {
  const resolvedPath = path.join(process.cwd(), pathToResolve);
  return resolvedPath;
};

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [require.resolve("@storybook/addon-storysource/loader")],
      enforce: "pre"
    },
    {
      test: sassModuleRegex,
      loaders: [
        "style-loader",
        require.resolve("css-hot-loader"),
        {
          loader: "css-loader",
          options: {
            modules: true
          }
        }
      ]
    },
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      loaders: [
        require.resolve("css-hot-loader"),
        "style-loader",
        {
          loader: "css-loader"
        }
      ]
    },
    {
      test: /\.scss$/,
      loaders: "sass-loader",
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
        sourceMap: true,
        data: `@import "src/shared/styles/variables.scss";
                 @import "src/shared/styles/global-style.scss";`
      },
      include: path.resolve(__dirname, "../")
    }
  );
  config.plugins.push(
    new webpack.DefinePlugin({
      __SERVER__: "false",
      __BROWSER__: "true"
    })
  );
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    "@app": root("src/shared"),
    "@assets": root("src/assets")
  };
  return config;
};
