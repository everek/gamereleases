import {
  createMuiTheme
} from '@material-ui/core/styles';
import {
  red
} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#0097a7",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

export default theme;