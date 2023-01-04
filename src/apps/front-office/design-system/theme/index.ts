import mediaQueries from 'shared/constants/mediaQueries';

const { tablet } = mediaQueries;

const theme = {
  colors: {
    PRIMARY: {
      main: '#131B3C',
      orange: '#F07428',

      dark: '',
    },
    SECONDARY: {
      main: '#F07428',
      100: '#FEFAF8',
      200: '#FFFBF9',

      400: '#F49342',
      dark: '#FF4C09',
    },
    lightBlue: {
      100: '#F9FAFB',
      200: '#EAF5FA',
      300: '#F2F3F5',
      400: '#1891C9',
      border: '#89C6E3',
    },
    light: {
      darkBlue: '#e9f1f7',
      lightBlue: '#e6fffd',
      teal: '#f1fafb',
      green: '#cedbcd',
      red: '#ffd1d4',
    },
    gray: {
      100: '#E3E4E4',
      200: '#F4F4F4',
      text: '#F0F0F2',
      dark: '#919EAB',
      main: '#5A7184',
      label: '#7E8299',
      DARK_GRAY: '#707070',
    },
    blue: {
      main: '#1891C9',
      light: '#A6D4EA',
      dark: '#1891C9',
      200: '#339ED0',
      100: '#EAF5FA',
      300: '#2698CD',
    },
    red: {
      main: '#FF1010',
      100: '#339ED0',
      dark: '#339ED0',
    },
    green: {
      100: '#28C816',
    },
    white: '#FFF',
    black: '#000',
    background: '#F9FAFB',
    inputBackground: '#F5F8FA',
    Derivative: '#459582',
    SUCCESS: '#1891C9',
    pagination: { main: '#ECEEF0', border: '#1A93CB' },
    bordercolor: '#EDEDED',
  },
  padding: {
    main: '30px',
    small: '10px',
  },
  margin: {
    main: '70px',
    small: '10px',
  },
  boxShadow: {
    light: '0 0 66px 0 rgba(0, 0, 0, 0.07)',
    dark: '0 0 66px 0 rgba(0, 0, 0, 0.22)',
    mid: '0 3px 16px 0 rgba(0, 0, 0, 0.06)',
    pagination: '0 3px 6px 0 rgba(0, 164, 151, 0.31)',
  },
  dev: {
    img: 'https://loremflickr.com/g/320/240/paris',
    video: 'https://www.youtube.com/watch?v=5AWRivBk0Gw',
  },
  gradients: {
    main: 'linear-gradient(52deg, #FD981A 2%, #FF4908 147%)',
    slider:
      'linear-gradient(90deg, rgba(255,255,255,0) 25%, rgba(27,170,177,0.75) 100%)',
    sliderEn:
      'linear-gradient(90deg, rgba(27,170,177,0.75) 0%, rgba(255,255,255,0) 75%)',
  },
};

export default theme;

// PRIMARY: '#131B3C',
// SECONDARY: '#F07428',
// SUCCESS: '#1891C9',
// LIGHT_GRAY: '#E9EAED',

// WHIRLPOOL_GREEN: '#28C816',
// WHITE: '#FFFFFF',
// OFF_WHITE: '#F9FAFB',
// ERROR: '#FC606A',
// WARNING: '#FAC64D',
// DISABLED: '#E5E5E5',
// BLACK: '#000000',
// GRAY: '#8A8686',
// BINK: '#F6794D',
