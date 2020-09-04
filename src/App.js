import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { PATHS } from "./routing/paths_constants";
import "./App.css";
import Login from "./components/login/login";
import LearnerList from "./components/learner_list/learner_list";
import LearnerStats from "./components/learner_stats/learner_stats";
import { memoryRoutingHistory } from "./routing/history";

function App() {
  return (
    <Router history={memoryRoutingHistory} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path={PATHS.Login} component={Login} />
        <Route path={PATHS.Students} component={LearnerList} />
        <Route path={PATHS.Student + "/:id"} component={LearnerStats} />
      </Switch>
    </Router>
  );
}

export default App;
