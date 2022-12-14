import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import App from 'components/App';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './constants';
import { Loader } from 'components/Loader';

const onBeforeLift = () => ({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate
          loading={<Loader />}
          persistor={persistor}
          onBeforeLift={onBeforeLift}
        >
          <App />
        </PersistGate>
      </Provider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  </React.StrictMode>
);
