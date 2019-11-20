import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import sweeperEngine from './reducers'

const store = createStore(sweeperEngine, composeWithDevTools())

export default store