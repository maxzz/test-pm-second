import { ReloadButton } from '../../ui/ReloadButton';
import { pageTitles } from './xlinks';
import { NumberLink } from './1-number-link';
import { GithubLink } from './2-github-link';

const footerShadow = { boxShadow: '#0000003b 0px -2px 10px 2px' };

export function App_Footer() {
    return (
        //<footer className="p-4 flex items-center justify-between bg-[#03014d] bg-hero-pattern text-indigo-600 border-indigo-900 border-t" style={footerShadow}>
        <footer className="p-4 flex items-center justify-between bg-indigo-900 text-indigo-600 border-indigo-900 border-t" style={footerShadow}>

            <div className="flex space-x-4">
                <GithubLink href="https://github.com/maxzz/test-pm-second/#other-test-pages" title="Open GitHub source code" />
                <ReloadButton className="w-16 opacity-25 hover:opacity-100" />
            </div>

            <div className="flex items-center space-x-2">
                <NumberLink label="1" {...pageTitles.t0} />
                <NumberLink label="2" {...pageTitles.re} />
                <NumberLink label="3" {...pageTitles.t2} />
                <NumberLink label="4" {...pageTitles.t3} />
            </div>
        </footer>
    );
}
