import { SET_ACTIVE_LEARNER_ID } from "./learner_stats.actions";

const learnerStats = {
    activeLearnerId: 1
};

export default function(state = learnerStats, action) {
  switch (action.type) {
    case SET_ACTIVE_LEARNER_ID: {
      const id = action.payload;
      return {
        ...state,
        activeLearnerId: id
      };
    }
    default:
      return state;
  }
}
