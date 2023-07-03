import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaultTheme";
import { GlobalStyles } from "./styles/global";

import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />

          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
