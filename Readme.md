<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/199043012/24.2.1%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T828553)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->

# Dashboard for React - Get Started

This project demonstrates how you can incorporate a DevExpress Dashboard component into a client-side app built with React. Use it as a template when you need to create a similar web application.

The example uses a modular client-server approach. The server (backend) project communicates with the client (frontend) application that includes all the necessary styles, scripts and HTML templates. Note that the script version on the client must match the version of libraries on the server.

- The [asp-net-core-server](asp-net-core-server) folder contains the backend project that targets .NET 6.
- The [dashboard-react-app](dashboard-react-app) folder contains the client application built with React.

## Quick Start

### Server

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```
The server starts at `http://localhost:5000` and the client gets data from `http://localhost:5000/api/dashboard`. To debug the server, run the **asp-net-core-server** application in Visual Studio and change the client's `endpoint` property according to the listening port: `https://localhost:44307/api/dashboard`.

See the following section for information on how to install NuGet packages from the DevExpress NuGet feed: [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages).

> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). This default configuration is insecure: any website can make cross-origin requests to the app. We recommend that you specify the client application's URL to prohibit other clients from accessing sensitive information stored on the server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

### Client

In the **dashboard-react-app** folder, run the following commands:

```
npm install
npm start
```

Open ```http://localhost:3000/``` in your browser to see the result.

## Files to Review
* [App.js](./dashboard-react-app/src/App.js)
* [Program.cs](./asp-net-core-server/Program.cs)

## Documentation

- [Create a React Dashboard Application](https://docs.devexpress.com/Dashboard/402336/get-started/build-web-dashboard-applications/create-a-react-dashboard-application)
- [Dashboard Component for React](https://docs.devexpress.com/Dashboard/401977/web-dashboard/dashboard-component-for-react)
- [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages)

## Examples

- [Dashboard for React - Configuration](https://github.com/DevExpress-Examples/dashboard-react-app-configuration)
- [Dashboard for Angular - Get Started](https://github.com/DevExpress-Examples/dashboard-angular-app-get-started)
- [Dashboard for Vue - Get Started](https://github.com/DevExpress-Examples/dashboard-vue-app-get-started)
- [Dashboard for ASP.NET Core - Backend](https://github.com/DevExpress-Examples/asp-net-core-dashboard-backend)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=dashboard-react-app-get-started&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=dashboard-react-app-get-started&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
