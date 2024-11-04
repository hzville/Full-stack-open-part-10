import { Platform } from "react-native";

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    backGroundGrey: '#24292e',
    backGroundLightGrey: '#e1e4e8',
    blue: '#0366d6',
    inputBorderGrey: '#ccc',
    red: 'red',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;