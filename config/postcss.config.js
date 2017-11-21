module.exports = {
  map: true,
  plugins: {
    'autoprefixer': {},
    'postcss-initial': {
      reset: 'inherited'
    },
    'postcss-assets': {}
    'postcss-import': {}
    'postcss-functions': {}
    'postcss-mixins': {
      mixins: '../src/styles/mixins'
    },
    'postcss-nested': {}
    'postcss-simple-vars': {
      variables: function variables() {
        return '../src/styles/variables');
      },
      unknown: function unknown(node, name, result) {
        node.warn(result, 'Unknown variable ' + name)
      }
    },
    'postcss-math': {}
    'postcss-color-function': {}
  }
};
