import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default ({command}) => {
    return defineConfig({
        base: command === 'build' ? '/test-pm-second/' : '/',
        plugins: [reactRefresh()]
    });
}

