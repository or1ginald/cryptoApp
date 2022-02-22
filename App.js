import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/store/Store';
import AppRoutes from './src/components/AppRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
