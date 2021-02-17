import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  Button,
  FormGroup,
  Checkbox,
  CheckboxIcon,
  FormControlLabel,
} from "@material-ui/core";
import { firestore } from "../firebase";

const NewReminderDialog = ({ openDialog, handleClose }) => {
  const [newReminder, setNewReminder] = useState({
    categories: [],
    deadline: Date.now(),
    description: "",
    title: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setNewReminder({ ...newReminder, [evt.target.name]: value });
  };

  //TODO Include Formik and update state to handle form handling.
  const testData = {
    categories: ["test data"],
    deadline: Date.now(),
    description: "Foo Bar",
    title: "Hello world!",
  };
  const addNewReminder = () => {
    return firestore
      .collection("reminders")
      .add(newReminder)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .then(handleClose);
  };

  return (
    <Dialog onClose={handleClose} open={openDialog}>
      <DialogTitle>Create New Reminder</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            onChange={handleChange}
            variant="outlined"
            name="title"
            label="Title"
          ></TextField>
          <TextField
            onChange={handleChange}
            variant="outlined"
            name="description"
            label="Description"
          ></TextField>
          <TextField
            onChange={handleChange}
            label="Deadline"
            name="deadline"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={addNewReminder}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewReminderDialog;
