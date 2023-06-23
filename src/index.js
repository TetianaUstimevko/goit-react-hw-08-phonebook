// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from 'redux/store';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import App from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <Provider store={store}>
//       <PersistGate loading={null}>
//          <BrowserRouter basename="/goit-react-hw-08-phonebook/">
//           <App />
//           </BrowserRouter>
//     </PersistGate>
//   </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    
      <App />
    
  </Provider>,
  </React.StrictMode>
);