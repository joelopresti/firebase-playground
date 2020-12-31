import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { indigo, blue } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  root: {
    background: indigo[500],
    minHeight: "100vh",
    paddingTop: "25px",
    color: "white",
  },
  header: {},
  button: {
    marginBottom: 25,
  },
  list: {
    minWidth: 400,
    maxWidth: 500,
    backgroundColor: blue[500],
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

export default theme;
