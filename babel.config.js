module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirroned in tsconfig.json/jsconfig.json
          assets: './assets',
          views: './views',
        },
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    ],
  ],
};
