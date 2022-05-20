import React from "react";
import { IconGhost } from "./UI/Icons";
import { a, useSpring } from "@react-spring/web";

const AIconGhost = a(IconGhost);

function Ghost() {
    const color = '#e0e7ff80';
    const styles = useSpring({
        from: {
            x: 1000,
            opacity: 0,
            scale: 1,
            color,
        },
        to: [
            { opacity: 1, x: 0 },
            { opacity: 1, x: -400 },
            { opacity: 1, x: 0 },
            { scale: 2, color: 'white', config: { duration: 1000, }, },
            { scale: 1 },
            { scale: 2, color: 'white', config: { duration: 1000, }, },
            { scale: 1, color, x: -50 },
            { opacity: 0, scale: 0, config: { duration: 700, }, },
        ],
        config: { duration: 600, },
    });
    return (
        <AIconGhost style={styles} className="w-8 h-8 text-indigo-100/50" />
    );
}

const headerShadow = { boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' };
const textShadow = { textShadow: '2px 3px #735bbf' };

export function AppHeader() {
    return (
        <header className="p-4 bg-indigo-900 flex items-center space-x-4" style={headerShadow}>
            <div className="text-2xl font-thin text-white" style={textShadow}>
                Password Manager Another Test
            </div>
            <Ghost />
        </header>
    );
}
