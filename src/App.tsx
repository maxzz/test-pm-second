import React from 'react';
import { AppSection1_Header } from './components/AppSection1_Header';
import { AppSection2_Main } from './components/AppSection2_Main';
import { AppSection3_Footer } from './components/AppSection3_Footer';

export function App() {
    return (
        <div className="h-screen bg-indigo-900 bg-hero-pattern flex flex-col">
            <AppSection1_Header />
            <AppSection2_Main className="flex-1" />
            <AppSection3_Footer />
        </div>
    );
}

//TODO: app to visualize sequence of react-spring animations
