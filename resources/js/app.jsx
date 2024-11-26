import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/build/sw.js").then(
            function (registration) {
                // Registration was successful
                // console.log(registration.scope);
            },
            function (err) {
                // Failed to register service worker
                console.log("ServiceWorker pendaftaran gagal: ", err);
            },
        );
    });
}

createInertiaApp({
    progress: {
        color: "#fff8c5",
        showSpinner: true,
    },
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx");
        const module = await pages[`./Pages/${name}.tsx`]();
        return module.default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <Provider store={store}>
                <App {...props} />
            </Provider>,
        );
    },
}).then((r) => r);
