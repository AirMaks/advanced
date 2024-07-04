import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { StoreProvider } from "app/providers/StoreProvider";
import "shared/config/i18n/i18n";
import "app/styles/index.scss";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
