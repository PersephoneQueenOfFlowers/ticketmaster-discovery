import React from "react";
import { Link, useParams } from "react-router-dom";

const Event = ({ eventsData, getDate }) => {

  // when this component loads, make sure window scrolls to top, 
  // no matter where scroll was on events click.  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { formattedSlug } = useParams();

  const getTwelveHour = (twentyFour) => {
    const twelveHour = Number(twentyFour.substring(0, 2)) % 12;
    return twelveHour + ':' + twentyFour.substring(3);
  }

  return (
    <div className='app__event-container'>
      {
        eventsData._embedded.events.filter((event) => event.formattedSlug === formattedSlug).map((event) => (
          <div key={event.id}>
            <img src={event.images[0].url} alt="individual team logo" />
            <h1>{event.name}</h1>
            <p>{getDate(event.dates.start.localDate)} at {getTwelveHour(event.dates.start.localTime)} - {event.dates.timezone} time</p>
            <a className="app__link" href={event.url}>
              visit ticketmaster for more details
            </a>
            <p>{event.sales.presales[0].name} from {event.sales.presales[0].startDateTime} to {event.sales.presales[0].endDateTime}</p>
            <p>General sales from {event.sales.public.startDateTime} to {event.sales.public.endDateTime}</p>
            <Link to='/' className="app__link">back to events</Link>
          </div>
        ))
      }
    </div>
  );
}

export default Event;
