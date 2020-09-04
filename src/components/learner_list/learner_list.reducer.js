import { LEARNERS } from "../../constants";

const loginState = {
    learners: LEARNERS
};

export default function(state = loginState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
