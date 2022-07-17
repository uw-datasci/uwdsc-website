import React, { useState } from 'react';

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

export default function CalendarGfg() {
    let state = {
        events: [
          {
            start: moment().toDate(),
            end: moment()
              .add(1, "days")
              .toDate(),
            title: "Some title"
          }
        ]
    };

    return (
        
        <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={state.events}
        style={{ height: "100vh", backgroundColor:""}}
      />

    );
}