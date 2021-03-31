import React, { useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState('maxzz');
    const [password, setPassword] = useState('123456');

    return (
        <div className="App bg-purple-900 h-screen bg-hero-pattern">
            <header 
                className="p-4 flex items-center justify-between bg-purple-400"
                style={{boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'}}
            >
                <div className="ml-2 pb-1 text-[1.4rem] font-thin text-white" style={{textShadow: '2px 3px #735bbf'}}>
                    Password Manager Another Test
                </div>
                <div className="flex items-center">
                    <div className="mr-2 flex space-x-2">
                        <a href="https://maxzz.github.io/test-pm">
                            <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Open original pm-test">1</div>
                        </a>
                        <a href="/">
                            <div className="px-2 mt-1 w-6 h-6 text-xs text-gray-100 border-gray-100 border rounded grid place-items-center" title="Reload this page">2</div>
                        </a>
                    </div>
                    <a
                        className="p-1 pt-2 pb-0 border rounded-full text-gray-100 border-gray-100"
                        href="https://maxzz.github.io/test-pm-second" target="_blank"
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

            {/* <div style={{boxShadow: '0 0 20px 7px rgba(255, 255, 255, .3)'}}> */}
                <section className="px-4 py-3 mt-4 mx-auto bg-purple-200 max-w-sm rounded-lg border shadow-sm ring-2 ring-purple-900 ring-offset-1 ring-offset-purple-600"
                    style={{'--tw-ring-offset-color': '#fff', boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)'} as any}
                >
                    <form id="test">
                        <div className="text-gray-600">Username</div>
                        <input className="px-2 py-1 mt-1 mb-4 text-base text-gray-600 w-full border border-purple-300 shadow-inner rounded outline-none focus:ring focus:ring-purple-300 focus:ring-offset-1" spellCheck="false" autoComplete="email" value={username} onChange={e => setUsername(e.target.value)}/>
                        <div className="text-gray-600">Password</div>
                        <input className="px-2 py-1 mt-1 mb-4 text-base text-gray-600 w-full border border-purple-300 shadow-inner rounded outline-none focus:ring focus:ring-purple-300 focus:ring-offset-1" spellCheck="false" autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 rounded text-sm text-gray-100 bg-purple-500 outline-none focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-1" onClick={(e) => e.preventDefault()}>Login</button>
                        </div>
                    </form>
                </section>
            {/* </div> */}
        </div>
    );
}

export default App;
