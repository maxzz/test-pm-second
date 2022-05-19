import React from "react";

export function AppHeader() {
    return (
        <header
            className="p-4 flex items-center justify-between bg-indigo-900"
            style={{ boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="ml-2 pb-1 text-[1.4rem] font-thin text-white" style={{ textShadow: '2px 3px #735bbf' }}>
                Password Manager Another Test
            </div>
        </header>
    );
}
