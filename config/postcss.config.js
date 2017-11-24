module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-initial')({
      reset: 'inherited'
    }),
    require('postcss-import'),
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
    require('postcss-color-function'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ]
};
