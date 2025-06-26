import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: [
            "4a214503-126d-4318-8e6b-7d4bb369a491-00-1k7vsx6p9w0dc.kirk.replit.dev",
        ],
    },
});
