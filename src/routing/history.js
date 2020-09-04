import { createBrowserHistory } from "history";

export const memoryRoutingHistory = createBrowserHistory();
export const basePath = process.env.PUBLIC_URL || "/LearnerMaster";

export const changeRoute = (routeUrl) => {
  console.log("**route", basePath + routeUrl);
  memoryRoutingHistory.push(basePath + routeUrl);
};

export const goBackRoute = () => {
  memoryRoutingHistory.goBack();
};

export const getRoutesLength = () => {
  return memoryRoutingHistory.length;
};

export const getCurrentRoute = () => memoryRoutingHistory.location.pathname;
