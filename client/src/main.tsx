import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <App />
  </PersistGate>
  </Provider>
);
