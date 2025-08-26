import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";

// Pendaftaran Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/build/sw.js")
      .then((registration) => {
        // ServiceWorker berhasil didaftarkan
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
    // Secara otomatis memuat semua file .tsx di dalam Pages
    const pages = import.meta.glob("./Pages/**/*.tsx");
    const module = await pages[`./Pages/${name}.tsx`]();
    return module.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  },
});
