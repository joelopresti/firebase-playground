import React from "react";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import UtilityButtons from "./UtilityButtons";
import ViewToggle from "./ViewToggle";

const Dashboard = ({ baseClass, currentView, updateView, reminder }) => {
  return (
    <>
      <ViewToggle
        baseClass={baseClass}
        currentView={currentView}
        updateView={updateView}
      />
      <UtilityButtons baseClass={baseClass} />
      {currentView === "list" ? (
        <ListView baseClass={baseClass} reminder={reminder} />
      ) : (
        <CalendarView />
      )}
    </>
  );
};

export default Dashboard;
