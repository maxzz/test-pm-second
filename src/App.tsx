import React, { useEffect, useState } from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import { GhostBubba, GhostDeartyDeeds, PhUserCircleDuotone } from './components/Icons';
import { a, config, useSpring } from '@react-spring/web';

function Header() {
    return (
        <header
            className="p-4 flex items-center justify-between bg-purple-400"
            style={{ boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="ml-2 pb-1 text-[1.4rem] font-thin text-white" style={{ textShadow: '2px 3px #735bbf' }}>
                Password Manager Another Test
            </div>
            <div className="flex items-center">
                <div className="mr-2 flex space-x-2">
                    <a href="https://maxzz.github.io/test-pm">
                        <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Open original pm-test">1</div>
                    </a>
                    <a href="https://maxzz.github.io/test-pm-second">
                        <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Reload this page">2</div>
                    </a>
                </div>
                <a
                    className="p-1 pt-2 pb-0 border rounded-full text-gray-100 border-gray-100"
                    href="https://github.com/maxzz/test-pm-second/#Other-test-pages" target="_blank"
                    title="Open GitHub source code"
                >
                    <div className="w-5 h-5">
                        <svg className="stroke-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </div>
                </a>
            </div>
        </header>
    );
}

function LoginForm({ logged, onLogin }: { logged: boolean; onLogin: () => void; }) {
    const [username, setUsername] = useLocalStorage('pm-test-2-username', 'maxzz');
    const [password, setPassword] = useLocalStorage('pm-test-2-password', '123456');
    const [styles, api] = useSpring(() => ({
        from: { opacity: 0, },
        to: { opacity: 1, },
        config: { ...{ duration: 600 }, ...config.wobbly },
    }));
    React.useEffect(() => {
        if (logged) {
            api.start({ opacity: 1, delay: 1200 });
        }
    }, [logged]);
    return (
        <form id="test" className="pt-6 pb-4 text-sm">
            <a.div style={styles}>
                <PhUserCircleDuotone className="w-16 h-16 mb-2 text-purple-400" />
            </a.div>

            {/* Username */}
            <div className="text-purple-800">Username</div>
            <input className="inp" spellCheck="false" autoComplete="email" value={username} onChange={e => setUsername(e.target.value)} />

            {/* Password */}
            <div className="text-purple-800">Password</div>
            <input className="inp" spellCheck="false" autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} type="password" />

            {/* Submit */}
            <div className="flex justify-end">
                <button className="btn" onClick={(e) => {
                    e.preventDefault();
                    api.start({
                        opacity: 0,
                        onRest: onLogin
                    });
                }}
                >Login</button>
            </div>
        </form>
    );
}

function Section({ showBabba, setShowBabba }: { showBabba: boolean; setShowBabba: React.Dispatch<React.SetStateAction<boolean>>; }) {
    const [styles, api] = useSpring(() => ({
        from: { transform: 'scaleX(0)' },
        to: { transform: 'scaleX(1)' },
        config: { ...config.wobbly },
    }));
    return (
        <a.div
            className="max-w-xs mx-auto"
            style={{ ...styles, ...{ boxShadow: '0 0 20px 7px rgba(255, 255, 255, .3)' } }}
        >
            <section
                className="px-4 py-3 mt-4 bg-purple-200 rounded-lg border shadow-sm ring-2 ring-purple-900 ring-offset-1 ring-offset-purple-600"
                style={{
                    '--tw-ring-offset-color': '#fff',
                    boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                } as any}
            >
                <LoginForm logged={showBabba} onLogin={() => setShowBabba((prev) => !prev)} />
            </section>
        </a.div>
    );
}

function App() {
    const [showBabba, setShowBabba] = useState(false);

    useEffect(() => {
        if (showBabba) {
            let timeout = setTimeout(() => setShowBabba(false), 1000);
            return () => clearTimeout(timeout);
        }
    }, [showBabba]);

    return (
        <div className="App bg-purple-900 h-screen bg-hero-pattern">
            <Header />
            {showBabba && <GhostBubba />}
            {!showBabba && <Section showBabba={showBabba} setShowBabba={setShowBabba} />}
            {/* <GhostDeartyDeeds /> */}
        </div>
    );
}

export default App;
