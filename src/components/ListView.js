import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const ListView = ({ baseClass }) => {
  return (
    <List className={baseClass.list}>
      <ListItem button className={baseClass.ListItem}>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <ListItem button className={baseClass.ListItem}>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <ListItem button className={baseClass.ListItem}>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export default ListView;
