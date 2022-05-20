import React from 'react';
import { AppHeader } from './components/AppHeader';
import { GhostMain } from './components/GhostMain';
import { AppFooter } from './components/AppFooter';
import './App.css';
import { MainSection } from './components/AppMain';


function App() {
    return (
        <div className="relative bg-indigo-900 h-screen bg-hero-pattern flex flex-col">
            <AppHeader />
            <GhostMain />

            <div className="flex-1 flex items-center justify-center">
                <MainSection />
            </div>

            <AppFooter />
        </div>
    );
}

export default App;
