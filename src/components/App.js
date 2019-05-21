import React from 'react';


import MeteorList from './MeteorList';
import Form from './Form';

const App=()=>{
    return (
        <div className="ui container">
            <div style={{textAlign:'center'}}><h1>Meteorite Explorer</h1></div>
            <Form />
            <MeteorList />
        </div>
    )
}

export default App;
