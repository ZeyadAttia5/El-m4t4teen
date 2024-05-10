import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AOL from './2_Admin_organization_list';
import DL from './3_Donor_list';
import ChangePasswordPage from './AdminChangePassword';
import App from './App';
import Donor1 from './Donor_1';
import Donor2 from './Donor_2';
import './index.css';
import Organization1 from './Organization_1';
import Organization2 from './Organization_2';
import Organization3 from './Organization_3';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "AOL",
    element: <AOL/>,
  },

  {
    path: "DL",
    element: <DL/>,
  },

  {
    path: "organization1",
    element: <Organization1/>,
  },

  {
    path: "organization2",
    element: <Organization2/>,
  },

  {
    path: "organization3",
    element: <Organization3/>,
  },
  {
    path: "donor1",
    element: <Donor1/>,
  },
  {
    path: "donor2",
    element: <Donor2/>,
  },
  {
    path: "ChangePasswordPage",
    element: <ChangePasswordPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
