# Get Started - Client-Side Dashboard Application built with React

This project demonstrates how you can incorporate a DevExpress Dashboard component into a client-side app built with React. Use it as a template when you need to create a similar web application.

The example uses a modular client-server approach. The server (backend) project communicates with the client (frontend) application that includes all the necessary styles, scripts and HTML templates. Note that the script version on the client must match the version of libraries on the server.

- The [asp-net-core-server](asp-net-core-server) folder contains the backend project built with ASP.NET Core 3.1.
- The [dashboard-react-app](dashboard-react-app) folder contains the client application built with React.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```
> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). It is insecure, because any website can make cross-origin requests to the app. We recommend you specify the client application's URL directly to prohibit clients from getting access to your personal information on your server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-react-app** folder, run the following commands:

```
npm install
npm start
```

Open ```http://localhost:3000/``` in your browser to see the result.

## Documentation

- [Create a React Dashboard Application](https://docs.devexpress.com/Dashboard/402336/get-started/build-web-dashboard-applications/create-a-react-dashboard-application?v=20.2)
- [Dashboard Component for React](https://docs.devexpress.com/Dashboard/401977/web-dashboard/dashboard-component-for-react?v=20.2)

## Examples
- [Dashboard Component for React - Configuration](https://github.com/DevExpress-Examples/dashboard-react-example)
- [Get Started - Client-Side Dashboard Application (Angular)](https://github.com/DevExpress-Examples/dashboard-angular-app)
- [Get Started - Client-Side Dashboard Application (Vue)](https://github.com/DevExpress-Examples/dashboard-vue-app)
- [ASP.NET Core 3.1 backend for Web Dashboard](https://github.com/DevExpress-Examples/asp-net-core-dashboard-backend)
