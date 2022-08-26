import React from 'react';
import logo from './logo.svg';
import './App.css';
import eventsData from './eventsData';
import Events from './Events';
import Event from './Event';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [eventData, setEventData] = React.useState({});
  
  // Date formatter for fixing the event dates from the api w/out Date obj. 
  const getDate = (dateData) => {
    const digits = dateData.split('-');
    return `${digits[1]}-${digits[2]}-${digits[0]}`;
  }

  // This method could be used to get a nicely-formatted event name for use in the url bar
  const getSlug = (eventName) => {
    return eventName.split('.').join('').replace(/[\s]/g, '-').toLowerCase();
  }

  // This will drill down, get individual event data, and use it to load event page
  const getEventData = (eventData) => {
    setEventData(eventData);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="loogo" />
      </header>    
        <Routes>
          <Route path="/" element={<Events getDate={getDate} getEventData={getEventData} eventsData={eventsData} getSlug={getSlug} />}>
          </Route>
          <Route path="/events/:id" element={<Event eventsData={eventsData} getDate={getDate} />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
