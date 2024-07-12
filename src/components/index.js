import React from 'react';
import './index.css';
// import {Demo2} from './pages/PrevDemo';
import {Demo} from './pages/Demo';
import { DemoWebsite } from './pages/DemoWebsite';

// import Test from './pages/Test'; // Correct way to import default export

function App() {
  return (
    <>
      {/* <Demo title="The button" /> */}
      <DemoWebsite />
    </>
  );
}

export default App;
