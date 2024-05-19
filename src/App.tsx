import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './containers/HomePage'
import Page2 from './containers/Page2'

import Layout from './components/Layout'

interface AppProps {
    basename: string
}

const App: React.FC<AppProps> = ({ basename }) => {
    return (
        <BrowserRouter basename={basename}>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage testProp1={'testProp1'} testProp2={100} />} />
                    <Route path="/Page2" element={<Page2 />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
