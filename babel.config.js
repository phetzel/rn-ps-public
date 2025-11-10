module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(() => (isTest ? 'test' : 'prod'));
  const presets = [['babel-preset-expo', isTest ? {} : { jsxImportSource: 'nativewind' }]];
  const plugins = [['@babel/plugin-proposal-decorators', { legacy: true }]];
  if (!isTest) {
    plugins.push('nativewind/babel');
  }
  return { presets, plugins };
};
