import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import url from '@rollup/plugin-url';
//import replace from '@rollup/plugin-replace';

const buildAt = () => {
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
};

const buildVersion = () => {
    const d = new Date();
    return `${d.getFullYear().toString().substring(3)}.${d.getMonth() + 1}${d.getDate()} (${d.getHours()}${d.getMinutes()})`;
};

export default ({ command }) => {
    return defineConfig({
        base: command === 'build' ? '' : '',
        plugins: [
            react(),

            { ...url({ include: ['**/*.svg'], limit: 15000, }), enforce: 'pre', },

            // replace({
            //     values: {
            //         __BUILD_DATE__: buildAt(),
            //         __BUILD_VER__: buildVersion(),
            //     },
            //     preventAssignment: true,
            // }),
        
            visualizer({
                filename: 'vizualization.html',
                template: 'sunburst', // sunburst - d3 style (good as default as well); treemap - table (default); network - graph (slow to open).
                gzipSize: true,
                brotliSize: true,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        }
    });
};
