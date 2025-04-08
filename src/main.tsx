import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from "./redux/store.ts";
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log("Service Worker Registered:", reg))
      .catch(err => console.error("Service Worker registration failed:", err));
  });
}
