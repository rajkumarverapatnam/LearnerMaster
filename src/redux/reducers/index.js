import { combineReducers } from "redux";

import login from "../../components/login/login.reducer";
import learners from "../../components/learner_list/learner_list.reducer";
import learnerStats from "../../components/learner_stats/learner_stats.reducer";

export default combineReducers({ 
    "login": login, 
    "learners": learners,
    "learnerStats": learnerStats 
});
