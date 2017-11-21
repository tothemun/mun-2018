import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';

export default syncHistoryWithStore(browserHistory, configureStore);
