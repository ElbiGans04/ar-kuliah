const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: ['vrx', 'png', 'jpg', 'obj', 'mtl', 'mp3'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
