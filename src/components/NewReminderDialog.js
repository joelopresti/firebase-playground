import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";

const NewReminderDialog = ({ title, children, openDialog, handleClose }) => {
  return (
    <Dialog onClose={handleClose} open={openDialog}>
      <DialogTitle>Create New Reminder</DialogTitle>
      <DialogContent>
        <form>
          <TextField variant="outlined" label="Title"></TextField>
          <TextField variant="outlined" label="Description"></TextField>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewReminderDialog;
