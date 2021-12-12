module.exports = {
    purge: ['./index.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
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
