import React from 'react';
import { Provider } from 'react-redux';

import { store } from './state/store';
import Navigation from './navigation';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
