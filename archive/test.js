// source: https://k6.io/docs/using-k6/test-lifecycle/
// init context: importing modules
import http from 'k6/http';
import { Trend } from 'k6/metrics';

// init context: define k6 options
export const options = {
  vus: 10,
  duration: '30s',
};

// init context: global variables
const customTrend = new Trend('oneCustomMetric');

// init context: define custom function
function myCustomFunction() {
  // ...
}
// The limitation of init code is that it cannot make HTTP requests. 