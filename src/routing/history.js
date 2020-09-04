import { createBrowserHistory } from 'history';


export const memoryRoutingHistory = createBrowserHistory();


export const changeRoute = (routeUrl) => {
  memoryRoutingHistory.push(routeUrl);
};

export const goBackRoute = () => {
  memoryRoutingHistory.goBack();
};

export const getRoutesLength = () => {
  return memoryRoutingHistory.length;
};

export const getCurrentRoute = () => memoryRoutingHistory.location.pathname;