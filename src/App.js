import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';

const App = () => (
    <div className="wrapper">
        <h1 className="mainHeader">Hello World</h1>
        <h2 className="secondaryHeader">Hello City</h2>
        <ListWrapper />
    </div>
    
);
export default App;