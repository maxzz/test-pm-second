module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': 'url("./src/assets/svg-bkg-turbulance.svg")'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
