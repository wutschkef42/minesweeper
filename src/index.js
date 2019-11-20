import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Center from './components/Center'
import MineSweeper from './components/MineSweeper'

import store from './store'

render(
    <Provider store={store}>
        <Center>
            <MineSweeper />
        </Center>
    </Provider>,
    document.getElementById('root')
)