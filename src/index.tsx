import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

const domContainer = document.querySelector('#root') as HTMLElement
const root = ReactDOM.createRoot(domContainer)
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
//   );

// 配合 webpack.config.js 是否有設定 publicPath
// export const BASE_NAME = '/basename'
export const BASE_NAME = '/'
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App basename={BASE_NAME} />
        </Provider>
    </React.StrictMode>
)

reportWebVitals()
