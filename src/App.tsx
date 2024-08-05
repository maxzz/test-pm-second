import React from 'react';
import { App_Header } from './components/1-header';
import { App_Main } from './components/2-main';
import { App_Footer } from './components/3-footer';

export function App() {
    return (
        <div className="h-screen bg-indigo-900 bg-hero-pattern flex flex-col">
            <App_Header />
            <App_Main className="flex-1" />
            <App_Footer />
        </div>
    );
}

//TODO: app to visualize sequence of react-spring animations
