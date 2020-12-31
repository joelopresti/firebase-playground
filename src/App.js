import { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles";
import { useStyles } from "./styles";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { firestore } from "./firebase";

function App() {
  const baseClass = useStyles();
  const [currentView, setCurrentView] = useState("list");
  const [reminder, setReminder] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    firestore
      .collection("reminders")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(new Date(data[0].deadline * 1000));
        setReminder(data[0]);
      });
  }, []);

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
              reminder={reminder}
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
