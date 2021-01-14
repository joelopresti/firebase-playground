import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import { firestore } from "../firebase";

const NewReminderDialog = ({ title, children, openDialog, handleClose }) => {
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
      .add(testData)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      });
  };
  return (
    <Dialog onClose={handleClose} open={openDialog}>
      <DialogTitle>Create New Reminder</DialogTitle>
      <DialogContent>
        <form>
          <TextField variant="outlined" label="Title"></TextField>
          <TextField variant="outlined" label="Description"></TextField>
          <Button variant="contained" color="primary" onClick={addNewReminder}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewReminderDialog;
