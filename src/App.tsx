import React, { useState } from 'react';
import { Header } from './components/Header';
import { LoginScreen } from './components/LoginScreen';
import { CharacterGhostBabba } from './components/CharacterGhostBabba';
import './App.css';
import { IconGhost } from './components/UI/Icons';

function App() {
    const [showBabba, setShowBabba] = useState(false);

    // useEffect(() => {
    //     if (showBabba) {
    //         let timeout = setTimeout(() => setShowBabba(false), 4000);
    //         return () => clearTimeout(timeout);
    //     }
    // }, [showBabba]);

    const onRest = () => {
        console.log('done');
        setShowBabba(false);
    }

    return (
        <div className="App bg-indigo-900 h-screen bg-hero-pattern flex flex-col">
            <Header />
            <IconGhost className="w-32 h-32 text-indigo-900" strokeWidth={.7} />

            <div className="flex-1 flex items-center justify-center">
                {/* {showBabba && <GhostBubba />} */}
                {/* {<GhostBabba />} */}
                {<CharacterGhostBabba show={showBabba} onRest={onRest} />}
                {/* {<CharacterGhostBabba show={true} />} */}
                
                {!showBabba && <LoginScreen showBabba={showBabba} setShowBabba={setShowBabba} />}
                {/* <GhostDeartyDeeds /> */}
            </div>
        </div>
    );
}

export default App;
