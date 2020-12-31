import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Delete from "@material-ui/icons/Delete";
import Schedule from "@material-ui/icons/Schedule";
import NewReminderDialog from "./NewReminderDialog";

const UtilityButtons = ({ baseClass }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <ButtonGroup
      color="primary"
      variant="contained"
      className={baseClass.button}
    >
      <Button startIcon={<Add />} onClick={handleOpen}>
        Add Reminder
      </Button>
      <NewReminderDialog openDialog={openDialog} handleClose={handleClose} />
      <Button startIcon={<Schedule />}>Set Deadline</Button>
      <Button startIcon={<Delete />} color="secondary">
        Delete Reminder
      </Button>
    </ButtonGroup>
  );
};

export default UtilityButtons;
