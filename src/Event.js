// src/components/Events.js
// API key: Vcdc8GVh3rwwL1UzuvJWumpSglpAShgQ
import React from "react";
// import moment from 'moment';
// import axios from "axios";
import { useParams } from "react-router-dom";
// import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const Event = ({ eventsData, getDate }) => {

  const { id } = useParams();

  const getTwelveHour = (twentyFour) => {
    const twelveHour = Number(twentyFour.substring(0, 2)) % 12;
    return twelveHour + ':' + twentyFour.substring(3);
  }

  return (
    <div className='event-container'>
      {
        eventsData._embedded.events.filter((event) => event.id === id).map((event) => (
          <div key={event.id}>
            <img src={event.images[0].url} alt="team logo" />
            <h1>{event.name}</h1>
            <p>{getDate(event.dates.start.localDate)} at {getTwelveHour(event.dates.start.localTime)} - {event.dates.timezone} time</p>
            <a href={event.url}>
              visit ticketmaster for more details
            </a>
            <p>{event.sales.presales[0].name} goes from {event.sales.presales[0].startDateTime} to {event.sales.presales[0].endDateTime}</p>
            <p>General sales go from {event.sales.public.startDateTime} to {event.sales.public.endDateTime}</p>
            <a href='/'>back to events</a>
          </div>
        ))
      }
    </div>
  );
}

export default Event;
