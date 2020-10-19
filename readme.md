# Dashboard Client-Side Application (React)

This example is a ready-to-use client React application with the DevExpress Dashboard component.

> **Documentation**: [Client-Side Configuration (React)](https://docs.devexpress.com/Dashboard/400683)

The example uses a modular approach that based on the client-server model. You need a server (backend) project and a client (frontend) application that includes all the necessary styles, scripts and HTML-templates. Note that the script version on the client should match with libraries version on the server up to a minor version.

- The [asp-net-core-server](asp-net-core-server) folder contains an ASP.NET Core 3.1 Dashboard application.
- The [dashboard-react-app](dashboard-react-app) folder contains a client application.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```

In the **dashboard-react-app** folder, run the following commands:

```
npm start
```

Open ```http://localhost:3000/``` in your browser to see the result.

## See Also

Documentation:
- [Client-Side Configuration (React)](https://docs.devexpress.com/Dashboard/400683)
- [HTML JavaScript Dashboard Control](https://docs.devexpress.com/Dashboard/119108/)

Examples:
- [Dashboard Client-Side Application (Angular)](https://github.com/DevExpress-Examples/dashboard-angular-app)
- [Dashboard Client-Side Application (Vue)](https://github.com/DevExpress-Examples/dashboard-vue-app)
