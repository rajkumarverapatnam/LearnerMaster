export const SET_ACTIVE_LEARNER_ID = "SET_ACTIVE_LEARNER_ID";
export const setActiveLearnerId = (id) => ({
    type: SET_ACTIVE_LEARNER_ID,
    payload: {
        "id": id
    }
});
