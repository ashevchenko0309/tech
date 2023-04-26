import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import uiReducer from "../slices/ui";

/* TODO: Fonts! */

const NeueHaas = localFont({
    src: [
        {
            path: "../../public/fonts/NeueHaasDisplay-Thin.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/NeueHaasDisplay-ThinItalic.woff",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/fonts/NeueHaasDisplay-Roman.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/NeueHaasDisplay-RomanItalic.woff",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/fonts/NeueHaasDisplay-Mediu.woff",
            weight: "500",
            style: "normal",
        },
    ],
});

export const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <div className={NeueHaas.className}>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}
