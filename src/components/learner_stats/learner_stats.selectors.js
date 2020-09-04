export const selectActiveLearnerId = (state) => state.learnerStats.activeLearnerId;

export const selectActiveLearnerData = (state, currId) => {
    console.log('**curr id', currId)
    return state.learners.learners.find(le => le.id === +currId);
};
