import React from "react";
// import { Link } from "react-router-dom";
import eventsData from './eventsData';
// import axios from 'axios';
// API key: Vcdc8GVh3rwwL1UzuvJWumpSglpAShgQ Please don't use.
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const Events = ({ getDate, getEventData }) => {

  const [pageEvents, setPageEvents] = React.useState({});

  React.useEffect(() => {
    // axios // not able to effectively test this because although it works, we get a 429 'too many calls'
    //   .get("/discovery/v2/events.json?countryCode=US&apikey=Vcdc8GVh3rwwL1UzuvJWumpSglpAShgQ",
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*"
    //       }
    //     }
    //   )
    //   .then(response => setPageEvents(response))
    //   .catch(err => {
    //     console.error(err);
    //   });
    setPageEvents(eventsData);
  }, []);

  return (
    <nav>
      <ul className='events'>
        {
          pageEvents?._embedded?.events?.map((event, i) => (
            <a href={`events/${event.id}`} onClick={() => getEventData(event)} key={i}>
              <li className="event">
                <img src={event.images[0].url} />
                <div>
                  <h4>{event.name}</h4>
                  <p>{getDate(event.dates.start.localDate)}</p>
                </div>
              </li>
            </a>
          )
          )
        }
      </ul>
    </nav>
  );
}
export default Events;