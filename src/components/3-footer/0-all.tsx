import { ReloadButton } from '../2-main/2-ghost/4-reload-button';
import { NumberLink } from './1-number-link';
import { GithubLink } from './2-github-link';
import { githubUrl, pageUrls } from './9-urls';

const footerShadow = { boxShadow: '#0000003b 0px -2px 10px 2px' };

export function App_Footer() {
    return (
        //<footer className="p-4 flex items-center justify-between bg-[#03014d] bg-hero-pattern text-indigo-600 border-indigo-900 border-t" style={footerShadow}>
        <footer className="p-4 flex items-center justify-between bg-indigo-900 text-indigo-600 border-indigo-900 border-t" style={footerShadow}>

            <div className="flex items-center space-x-4">
                <GithubLink href={githubUrl} title="Open GitHub source code" />
                <ReloadButton className="py-1.5 opacity-25 hover:opacity-100" />
            </div>

            <div className="flex items-center space-x-2">
                <NumberLink label="1" {...pageUrls.t0} />
                <NumberLink label="2" {...pageUrls.re} />
                <NumberLink label="3" {...pageUrls.t2} />
                <NumberLink label="4" {...pageUrls.t3} />
            </div>
        </footer>
    );
}
