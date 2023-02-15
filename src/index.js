import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TwoWayBinding from './components/TwoWayBinding';
// import NetflixRegiserComponent from './components/NetflixRegiserComponent';
// import NetFlixIndexComponent from './components/NetFlixIndexComponent';
// import RegisterComponent from './components/RegisterComponent';
// import DataBindingComponent from './components/DataBindingComponent';
// import ShoppingComponent from './components/ShoppingComponent';
// import EventBindingComponent from './components/EventBindingComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NetflixRegiserComponent /> */}
    {/* <NetFlixIndexComponent /> 
     <RegisterComponent />
     <DataBindingComponent /> */}
     {/* <ShoppingComponent /> */}
     {/* <EventBindingComponent /> */}
     <TwoWayBinding />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
