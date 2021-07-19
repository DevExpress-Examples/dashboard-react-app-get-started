import React, { Component } from 'react';
import DashboardComponent from './DashboardComponent';

class App extends Component {
    render() {
        return (
        <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
            <DashboardComponent />
        </div>
        );
    }
}

export default App;