import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
} from "@material-ui/core";
import CalendarToday from "@material-ui/icons/CalendarToday";
import { firestore } from "../firebase";

const ListView = ({ baseClass }) => {
  const [reminders, setReminders] = useState([]);
  useEffect(() => {
    firestore
      .collection("reminders")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setReminders(data);
      });
  }, [reminders]);
  return (
    <List className={baseClass.list}>
      {reminders.map((reminder, index) => {
        return (
          <ListItem button className={baseClass.ListItem} key={index}>
            <ListItemIcon>
              <Badge badgeContent={4} color="secondary">
                <CalendarToday />
              </Badge>
            </ListItemIcon>
            <ListItemText
              primary={reminder.title}
              secondary={reminder.description}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListView;
