import React from 'react';
import { DashboardControl, ResourceManager, DashboardPanelExtension } from 'devexpress-dashboard';
import Globalize from 'globalize'

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.initGlobalize();
        ResourceManager.embedBundledResources();
    }

    componentDidMount() {
        this.dashboardControl = new DashboardControl(this.refs.dashboardcontainer,  {          
            // Specifies the URL where the Web Dashboard's server side is hosted.
            endpoint: "https://demos.devexpress.com/services/dashboard/api",
            workingMode: "Designer",
        });
        this.dashboardControl.registerExtension(new DashboardPanelExtension(this.dashboardControl));
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

    initGlobalize() {
        Globalize.load(
            require('devextreme-cldr-data/en.json'),
            require('devextreme-cldr-data/supplemental.json')
        );
        Globalize.locale('en');
    }
}

export default DashboardComponent;