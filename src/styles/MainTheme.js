import {createMuiTheme} from '@material-ui/core/styles';

export const colors = {
  black: '#000000',
  blue: '#46758C',
  blueDark: '#20517A',
  green: '#7aa42c',
  greenGrey: '#72A196',
  greenLight: '#a1bf6b',
  greenDark: '#55721e',
  grey: '#676767',
  greyLightLight: '#f3f3f3',
  greyLightest: '#00000010',
  greyLight: '#00000029',
  greyDark: '#707070',
  white: '#ffffff',
  transparentWhite: '#ffffff69',
  transparentBlack: '#0808087d'
};

export const theme = createMuiTheme({
  colors: colors,
  palette: {
    primary: {
      main: colors.green,
      contrastText: colors.white
    },
    secondary: {
      main: colors.greenLight,
      contrastText: colors.green
    }
  },
});