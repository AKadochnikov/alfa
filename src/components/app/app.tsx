import React from 'react';
import Main from '../main/main';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';

function App():JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
