import ReactDOM from "react-dom/client";
import { Provider } from "effector-react";
import { App } from "@/app";
import { allSettled, fork } from "effector";
import { RouterProvider } from "atomic-router-react";
import { routes } from "@/shared/routing";
import { appStarted } from "@/shared/init";

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
