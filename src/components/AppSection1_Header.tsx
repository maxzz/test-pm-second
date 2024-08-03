import React from "react";
import { IconGhost } from "./ui2/Icons";
import { a, config, useSpring } from "@react-spring/web";

const AIconGhost = a(IconGhost);

function Ghost() {
    const color = '#e0e7ff80'; //text-indigo-100/50
    const styles = useSpring({
        from: {
            x: 1000,
            opacity: 0,
            scale: 1,
            color,
        },
        to: [
            { opacity: 1, x: 0, config: config.default, },
            { opacity: 1, x: -400, config: config.default, },
            { opacity: 1, x: 0, config: config.default, },
            { scale: 2, color: 'white', config: { duration: 700, }, },
            { scale: 1 },
            { scale: 2, color: 'white', config: { duration: 400, }, },
            { scale: 1, color, x: -50 },
            { opacity: 0, scale: 0, config: config.default, },
        ],
        config: { duration: 600, },
    });
    return (
        <AIconGhost style={styles} className="w-8 h-8 text-indigo-100/50" />
    );
}

const headerShadow = { boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' };
const textShadow = { textShadow: '2px 3px #1f1e58' };

export function AppSection1_Header() {
    return (
        // <header className="p-4 bg-[#03014d] bg-hero-pattern flex items-center space-x-4 overflow-hidden" style={headerShadow}>
        <header className="p-4 bg-indigo-900 flex items-center space-x-4 overflow-hidden" style={headerShadow}>
            <div className="text-2xl font-thin text-white" style={textShadow}>
                Password Manager Ghost Test
            </div>
            <Ghost />
        </header>
    );
}
