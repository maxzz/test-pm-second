import { HeaderGhost } from "./2-header-ghost";

const headerShadow = { boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' };
const textShadow = { textShadow: '2px 3px #1f1e58' };

export function App_Header() {
    return (
        // <header className="p-4 bg-[#03014d] bg-hero-pattern flex items-center space-x-4 overflow-hidden" style={headerShadow}>
        <header className="p-4 bg-indigo-900 flex items-center space-x-4 overflow-hidden" style={headerShadow}>
            <div className="text-2xl font-thin text-white" style={textShadow}>
                Password Manager Ghost Test
            </div>

            <HeaderGhost />
        </header>
    );
}
