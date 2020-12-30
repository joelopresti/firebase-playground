import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import CalendarToday from "@material-ui/icons/CalendarToday";
import List from "@material-ui/icons/List";

const ViewToggle = ({ baseClass, currentView, updateView }) => {
  return (
    <ButtonGroup
      color="primary"
      variant="contained"
      className={baseClass.button}
    >
      <Button
        disabled={currentView === "list" ? true : false}
        startIcon={<List />}
        onClick={updateView}
      >
        List View
      </Button>
      <Button
        disabled={currentView === "calendar" ? true : false}
        startIcon={<CalendarToday />}
        onClick={updateView}
      >
        Calendar View
      </Button>
    </ButtonGroup>
  );
};

export default ViewToggle;
