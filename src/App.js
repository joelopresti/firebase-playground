import { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles";
import { useStyles } from "./styles";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

function App() {
  const baseClass = useStyles();
  const [currentView, setCurrentView] = useState("list");
  const [authenticated, setAuthenticated] = useState(false);

  function updateView() {
    currentView === "list"
      ? setCurrentView("calendar")
      : setCurrentView("list");
  }

  function handleLogin(e) {
    e.preventDefault();
    setAuthenticated(!authenticated);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={baseClass.root}>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h3" className={baseClass.header}>
            <NotificationsActiveIcon fontSize="large" />
            Reminder
          </Typography>
          <Typography>{`User is Logged in: ${authenticated}`}</Typography>
          {authenticated ? (
            <Dashboard
              baseClass={baseClass}
              currentView={currentView}
              updateView={updateView}
            />
          ) : (
            <Login handleLogin={handleLogin} />
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
