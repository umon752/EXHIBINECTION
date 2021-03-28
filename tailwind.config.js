module.exports = {
  // future: {
  //   // removeDeprecatedGapUtilities: true,
  //   // purgeLayersByDefault: true,
  //   // defaultLineHeights: true,
  //   // standardFontWeights: true
  // },
  purge: {
    enabled: true,
    content: ['./app/**/*.html', './app/**/*.ejs', './app/**/*.scss', './app/**/*.js'],
  },
  theme: {
    screens: {
      'sm': '640px', // 手機

      'md': '768px', // 手機橫式

      'lg': '1024px', //平板

      'xl': '1140px', // 桌電
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '20px',
      'xl': '22px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '44px',
    },
    fontWeight: {
      light: 300,
      medium: 500,
      normal: 400,
      bold: 700,
    },
    colors: {
      primary: {
        lighter: '#D80EB1', // 線框顏色
        light: '#E31277',
        default: '#630834',
        dark: '#190014',
      },
      secondary: {
        100: '#EFEFEF',
        200: '#95989A', // 線框顏色
        300: '#818A91',
        400: '#707070', // 線框顏色
        500: '#55595C',
        600: '#373A3C',
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    container: {
      padding: '15px',
      center: true,
    },
    lineHeight: {
      'xs': '18px',
      'sm': '21px',
      'base': '24px',
      'lg': '26px',
      'xl': '30px',
      '2xl': '36px',
      '3xl': '42px',
      '4xl': '48px',
      '5xl': '54px',
    },
    spacing: {
      0: '0px',
      1: '4px',
      2: '8px',
      3: '10px',
      4: '12px',
      5: '14px',
      6: '16px',
      7: '18px',
      8: '20px',
      9: '22px',
      10: '24px',
      11: '26px',
      12: '28px',
      13: '30px',
      14: '32px',
      15: '36px',
      16: '40px',
      17: '42px',
      18: '44px',
      19: '46px',
      20: '48px',
      21: '52px',
      22: '60px',
      23: '76px',
      24: '80px',
      25: '88px',
      26: '92px',
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
    extend: {}
  },
  variants: {},
  plugins: []
}