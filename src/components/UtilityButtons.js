import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";
import Schedule from "@material-ui/icons/Schedule";

const UtilityButtons = ({ baseClass }) => {
  return (
    <ButtonGroup
      color="primary"
      variant="contained"
      className={baseClass.button}
    >
      <Button startIcon={<Add />}>Add Reminder</Button>
      <Button startIcon={<Schedule />}>Set Deadline</Button>
      <Button startIcon={<Delete />} color="secondary">
        Delete Reminder
      </Button>
    </ButtonGroup>
  );
};

export default UtilityButtons;
