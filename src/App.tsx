import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'

interface AppProps {
    basename: string
}

const App: React.FC<AppProps> = ({ basename }) => {
    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
