const globalMixins = {
  noSelect: {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  },
  selectable: {
    'cursor': 'pointer',
    'transition': '100ms ease-in-out all',

    '&:hover': {
      'box-shadow': '0 2px 10px 0 rgba(0,0,0,0.15)',
    },
    '&:active': {
      'box-shadow': '0 2px 10px 0 rgba(0,0,0,0.15)',
    },
    '&:focus': {
      'outline': 'none !important',
    },
    '&:disabled': {
      'background-color': '#b3b3b3',

      '&:hover': {
        'box-shadow': 'none',
        'background-color': '#b3b3b3',
      }
    }
  }
}

module.exports = globalMixins
