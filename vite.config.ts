import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import url from '@rollup/plugin-url';

export default ({ command }) => {
    return defineConfig({
        base: command === 'build' ? '' : '',
        plugins: [
            react(),
            {
                ...url(),
                enforce: 'pre',
            },
            visualizer({
                filename: 'vizualization.html',
                template: 'sunburst', // sunburst - d3 style (good as default as well); treemap - table (default); network - graph (slow to open).
                gzipSize: true,
                brotliSize: true,
            }),
        ]
    });
};
