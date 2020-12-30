import theme from "./styles";
import { useStyles } from "./styles";
import { useState } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import ListView from "./components/ListView";
import CalendarView from "./components/CalendarView";
import UtilityButtons from "./components/UtilityButtons";
import ViewToggle from "./components/ViewToggle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./App.css";

function App() {
  const baseClass = useStyles();
  const [currentView, setCurrentView] = useState("list");

  function updateView() {
    currentView === "list"
      ? setCurrentView("calendar")
      : setCurrentView("list");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className={baseClass.root}>
        <Typography variant="h3" className={baseClass.header}>
          <NotificationsActiveIcon fontSize="large" />
          Reminder
        </Typography>
        <ViewToggle
          baseClass={baseClass}
          currentView={currentView}
          updateView={updateView}
        />
        <UtilityButtons baseClass={baseClass} />
        {currentView === "list" ? (
          <ListView baseClass={baseClass} />
        ) : (
          <CalendarView />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
