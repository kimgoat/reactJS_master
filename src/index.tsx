import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./Router";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const client = new QueryClient();
const element = document.getElementById("root");
const root = createRoot(element as Element);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
