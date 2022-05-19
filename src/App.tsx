import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { LoginScreen } from './components/LoginScreen';
import { CharacterGhostBabba } from './components/CharacterGhostBabba';

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
        <div className="App bg-purple-900 h-screen bg-hero-pattern">
            <Header />
            {/* {showBabba && <GhostBubba />} */}
            {/* {<GhostBabba />} */}

            {<CharacterGhostBabba show={showBabba} onRest={onRest} />}
            {/* {<CharacterGhostBabba show={true} />} */}

            {!showBabba && <LoginScreen showBabba={showBabba} setShowBabba={setShowBabba} />}
            {/* <GhostDeartyDeeds /> */}
        </div>
    );
}

export default App;
