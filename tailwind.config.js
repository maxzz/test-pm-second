module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                //'hero-pattern': 'url("/src/assets/svg-bkg-turbulance.svg")'
                'hero-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='500' height='500'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='10' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='500' height='500' fill='%2311223301'%3E%3C/rect%3E%3Crect width='500' height='500' filter='url(%23n)' opacity='0.4'%3E%3C/rect%3E%3C/svg%3E")`
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

/*
const bkg = require("./src/assets/svg-bkg-turbulance.svg");
    ...
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': `url(${bkg})`
            }
        },
    },
    ...
};
*/
