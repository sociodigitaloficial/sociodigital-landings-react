import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Publicidad from '@pages/publicidad';
import Instagram from '@pages/instagram';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
    const initialState = useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Publicidad />}>
                        <Route path="/publicidad" element={<Publicidad />} />
                        <Route path="/instagram" element={<Instagram />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;