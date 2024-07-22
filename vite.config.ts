import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dns from 'dns'
import svgr from 'vite-plugin-svgr';
// dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config
export default defineConfig({
    plugins: [
        svgr({
            exportAsDefault: true,
        }),
        react(),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        // host: true, // needed for the DC port mapping to work
        host: '0.0.0.0',
        strictPort: true,
        port: 3000,
    },
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
