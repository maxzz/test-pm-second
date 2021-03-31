module.exports = {
    purge: ['./index.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': './src/assets/svg-bkg-turbulance.svg'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
