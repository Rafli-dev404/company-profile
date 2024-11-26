import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {VitePWA} from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
            },
            injectRegister: "auto",
        }),
        react(),
    ],
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
        return pages[`./Pages/${name}.tsx`]
    },
});
