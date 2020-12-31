import { useState, useContext, createContext, useEffect } from "react";
import { firestore } from "../firebase";

const ReminderContext = createContext();

export function useReminder() {
  return useContext(ReminderContext);
}

const ReminderProvider = ({ children }) => {
  const [reminder, setReminder] = useState({});
  useEffect(() => {
    firestore
      .collection("reminders")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(new Date(data[0].deadline * 1000));
        setReminder(data[0]);
      });
  }, []);
  return (
    <ReminderContext.Provider value={reminder}>
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderProvider;
