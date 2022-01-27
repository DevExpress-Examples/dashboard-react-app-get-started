import React from 'react';
import { DashboardControl, ResourceManager } from 'devexpress-dashboard';

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);
        ResourceManager.embedBundledResources();
    }

    componentDidMount() {
        this.dashboardControl = new DashboardControl(this.refs.dashboardcontainer,  {          
            // Specifies the URL where the Web Dashboard's server side is hosted.
            endpoint: "https://demos.devexpress.com/services/dashboard/api",
            workingMode: "Designer",
        });
        this.dashboardControl.render();
    }

    componentWillUnmount() {
        this.dashboardControl.dispose();
    }

    render() {
        return (
            <div ref="dashboardcontainer" style={{ width: '100%', height: '100%' }}></div>
        );
    }
}

export default DashboardComponent;