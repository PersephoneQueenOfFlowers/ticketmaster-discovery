import React from "react";
import { Link } from "react-router-dom";
import eventsData from './eventsData';
// import axios from 'axios';
// API key: Vcdc8GVh3rwwL1UzuvJWumpSglpAShgQ Please don't use :).
// Important if the apiKey were a paid key, to not be hard-coded anywhere in remote.
// package.json "homepage" key set for remote deploy.
const Events = ({ getDate, getEventData }) => {

  const [pageEvents, setPageEvents] = React.useState({});

  React.useEffect(() => {
    // axios // not able to effectively test this because although it works, we get a 429 'too many calls'. See screenshot in src directory.
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
    <nav className="app__nav">
      <ul className='events'>
        {
          pageEvents?._embedded?.events?.map((event, i) => (
            <Link to={`events/${event.formattedSlug}`} className="app__link" onClick={() => getEventData(event)} key={i}>
              <li className="event">
                <img src={event.images[0].url} alt="individual team logo"/>
                <div>
                  <h4 className="app__link">{event.name}</h4>
                  <p>{getDate(event.dates.start.localDate)}</p>
                </div>
              </li>
            </Link>
          )
          )
        }
      </ul>
    </nav>
  );
}
export default Events;