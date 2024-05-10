import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DonorPage from "./DonorPage/DonorPage";
import DonorVolunteerRedirect from "./DonorPage/DonorVolunteerRedirect";

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={DonorVolunteerRedirect} />
        <Route path="/donorpage" component={DonorPage} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );