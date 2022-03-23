import React from 'react';
import Main from '../main/main';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
