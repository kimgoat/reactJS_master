import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const element = document.getElementById("root");
const root = createRoot(element as Element);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
