import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/index";
import { SiteContentProvider } from "./components/context/siteContentContext";
import { TeamProvider } from "./components/context/teamContentContext";
import { ServiceProvider } from "./components/context/serviceContentContext";

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob("./Pages/**/*.tsx");
    const module = await pages[`./Pages/${name}.tsx`]();
    return module.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ReduxProvider store={store}>
        <SiteContentProvider>
          <TeamProvider>
            <ServiceProvider>
              <App {...props} />
            </ServiceProvider>
          </TeamProvider>
        </SiteContentProvider>
      </ReduxProvider>
    );
  },
});
