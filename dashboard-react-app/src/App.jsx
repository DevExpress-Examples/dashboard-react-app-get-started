import React from 'react';
import 'ace-builds/css/ace.css';  
import 'ace-builds/css/theme/dreamweaver.css';  
import 'ace-builds/css/theme/ambiance.css';  
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import '@devexpress/analytics-core/dist/css/dx-querybuilder.css';
import 'devexpress-dashboard/dist/css/dx-dashboard.light.css';
import DashboardControl from 'devexpress-dashboard-react';

function App() {  
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <DashboardControl style={{ height: '100%' }} 
        endpoint="http://localhost:5000/api/dashboard">
      </DashboardControl>
  </div>
  );
}

export default App;