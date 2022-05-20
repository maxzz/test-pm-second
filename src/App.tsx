import React from 'react';
import { AppSection1_Header } from './components/AppSection1_Header';
import { AppSection2_Main } from './components/AppSection2_Main';
import { AppSection3_Footer } from './components/AppSection3_Footer';
import { GhostMain } from './components/GhostMain';
import './App.css';

function App() {
    return (
        <div className="relative bg-indigo-900 h-screen bg-hero-pattern flex flex-col">
            <AppSection1_Header />
            <GhostMain />

            <div className="flex-1 flex items-center justify-center">
                <AppSection2_Main />
            </div>

            <AppSection3_Footer />
        </div>
    );
}

export default App;
