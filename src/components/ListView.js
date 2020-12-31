import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
} from "@material-ui/core";
import CalendarToday from "@material-ui/icons/CalendarToday";

const ListView = ({ baseClass, reminder }) => {
  return (
    <List className={baseClass.list}>
      <ListItem button className={baseClass.ListItem}>
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
      <ListItem button className={baseClass.ListItem}>
        <ListItemIcon>
          <Badge badgeContent={1} color="secondary">
            <CalendarToday />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <ListItem button className={baseClass.ListItem}>
        <ListItemIcon>
          <Badge badgeContent={2} color="secondary">
            <CalendarToday />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export default ListView;
