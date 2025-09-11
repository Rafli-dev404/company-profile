import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index";
import { SiteContentProvider } from "./components/context/siteContentContext"; // pastikan path benar

// Pendaftaran Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/build/sw.js")
      .then((registration) => {
        // console.log("SW scope:", registration.scope);
      })
      .catch((err) => {
        console.log("Pendaftaran ServiceWorker gagal:", err);
      });
  });
}

// Setup Inertia.js
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
      <ReduxProvider store={store}>
        <SiteContentProvider>
          <App {...props} />
        </SiteContentProvider>
      </ReduxProvider>
    );
  },
});
