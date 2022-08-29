import React from 'react';
import logo from './logo.svg';
import './App.css';
import eventsData from './eventsData.json';
import Events from './Events';
import Event from './Event';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function App() {

  const [eventData, setEventData] = React.useState({});

  // set SEO and user friendly url slug for individual event pages.
  React.useEffect(() => {
    eventsData?._embedded?.events.forEach((event) => {
      event["formattedSlug"] = event.name.split('.').join('').replace(/[\s]/g, '-').toLowerCase();
    });
  }, []);

  // Date formatter for fixing the event dates from the api w/out Date obj. 
  const getDate = (dateData) => {
    const digits = dateData.split('-');
    return `${digits[1]}-${digits[2]}-${digits[0]}`;
  }

  // Drill down, get individual event data, and use it to load event page
  const getEventData = (eventData) => {
    setEventData(eventData);
  } 

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="ticketmaster logo" />
      </header>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Events getDate={getDate} getEventData={getEventData} eventsData={eventsData} />}>
          </Route>
          <Route path="/events/:formattedSlug" element={<Event eventsData={eventsData} getDate={getDate} />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
