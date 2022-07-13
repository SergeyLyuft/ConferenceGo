import Nav from './Nav';
import React from 'react';
import AttendeesList from "./AttendeesList"
import LocationForm from "./LocationForm"
import ConferenceForm from "./ConferenceForm"
import AttendConferenceForm from "./AttendConferenceForm"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentationForm from "./PresentationForm"
import MainPage from "./MainPage"


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
    <Nav />          
      <div className='container'>
      <Routes>
        <Route path="locations">
            <Route path="new" element={<LocationForm />} />
        </Route>
        <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
        </Route>
        <Route path="attendees">
            <Route path="new" element={<AttendConferenceForm />} />
        </Route>
        <Route>
            <Route path="attendees" element={<AttendeesList />} />
        </Route>
        <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
        </Route>
        <Route index element={<MainPage />} />
      </Routes>
      {/* <ConferenceForm /> */}
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees = {props.attendees}/> */}
      </div>  
    </BrowserRouter>      
  );
}

export default App;
