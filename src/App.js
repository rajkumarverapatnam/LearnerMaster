import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { PATHS } from "./routing/paths_constants";
import "./App.css";
import Login from "./components/login/login";
import LearnerList from "./components/learner_list/learner_list";
import LearnerStats from "./components/learner_stats/learner_stats";
import { memoryRoutingHistory, basePath } from "./routing/history";

function App() {
  console.log("***base name", process.env.PUBLIC_URL);
  return (
    <Router history={memoryRoutingHistory} basename={"/LearnerMaster"}>
      <Switch>
        <Route exact path={basePath + "/"} component={Login} />
        <Route path={basePath + PATHS.Login} component={Login} />
        <Route path={basePath + PATHS.Students} component={LearnerList} />
        <Route
          path={basePath + PATHS.Student + "/:id"}
          component={LearnerStats}
        />
      </Switch>
    </Router>
  );
}

export default App;
