const postCSSConfig = [
  require('autoprefixer'),
  require('postcss-initial')({
    reset: 'inherited'
  }),
  require('postcss-assets'),
  require('postcss-import'),
  require('postcss-functions'),
  require('postcss-mixins')({
    mixins: require('../src/styles/mixins')
  }),
  require('postcss-nested'),
  require('postcss-simple-vars')({
    variables: function variables() {
      return require('../src/styles/variables');
    },
    unknown: function unknown(node, name, result) {
      node.warn(result, 'Unknown variable ' + name)
    }
  }),
  require('postcss-math'),
  require('postcss-color-function')
];

module.exports = postCSSConfig;
