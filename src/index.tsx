import { RouterProvider } from "atomic-router-react";
import { allSettled, fork } from "effector";
import { Provider } from "effector-react";
import ReactDOM from "react-dom/client";

import { App } from "@/app";

import { appStarted } from "@/shared/init";
import { routes } from "@/shared/routing";

const root = document.getElementById("root")!;

const scope = fork();

allSettled(appStarted, { scope }).catch(() => {
  console.error("Failed to initialize");
});

ReactDOM.createRoot(root).render(
  <Provider value={scope}>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </Provider>,
);
