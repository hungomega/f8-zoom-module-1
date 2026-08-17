import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/f8-zoom-module-1/" : "/",

    build: {
        outDir: "dist",
        emptyOutDir: true,

        rollupOptions: {
            input: {
                home: path.resolve(__dirname, "index.html"),
                about: path.resolve(__dirname, "about.html"),
                practice: path.resolve(__dirname, "practice.html"),
                blog: path.resolve(__dirname, "blog.html"),
                contact: path.resolve(__dirname, "contact.html"),
            },
        },
    },

    plugins: [ViteEjsPlugin()],
});
