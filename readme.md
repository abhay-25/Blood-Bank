A blood bank full stack project is a web application that helps to manage the operations of a blood bank.

Tools & technologies used:-  JavaScript, Node.js, Express.js, React, MongoDB

The objective of the project is to help blood banks manage their operations more efficiently and effectively. This application can manage tasks such as: Managing blood inventory, Tracking donor history, Managing organisation and hospitals. Basically this web application has 3 types of users donors, hospitals and organisations and a application administrator who can access database. Donors can access information like organisations they have interacted with. These are the organisations where these donors have either donated the blood or have taken out blood in time of need. The donor account also maintains the transaction of blood, donor has come across after the creation of account. Transaction data maintains the blood group, inventory type, Quantity and organisation email, hospital name, and timestamp.

However, donor has read only data. i.e if a donor has to donate blood he has to visit to organisation or simply blood can be donated to organisations only.

Now lets come to organisation handle.

Organisation handle dashboard has 3 options hospital, donor, inventory

Organisation handles have data related to hospitals they have collaboration with. This data involves hospital's name, email, contact no. , address.

Organisations also have a list of their donor which can be easily accessed from dashboard

Orgnaisation inventory stores transaction of blood in and out of blood bank.

Organisation also features a analytics option. which shows the total blood of each type present in the blood bank at current time and also total in and out flow of each blood type. Analytics dashboard also shows 3 recent transactions in blood bank.

whenever a donor comes to organisation to donate blood. He/She has to select inventory type in enter his/her email address and quantity of blood. However only a person having a donor account can donate blood.

In case of need to take out blood only hospitals are allowed to take out blood. At the time of taking out blood hospital has provide their registered email, patients registerd email , blood group and quantity. However, if there is insufficient blood, organisation can deny the transaction.

Now, let's come to hospital handle:

their dashboard have 2 options organisations, and consumers.

Organisations options have details regarding organisations, hospital has collaberated with. consumers options has list of patients who requested blood.

Last is admin's handle.

Admin's handle has access to all users handle. He can delete handles which are no longer needed. Though he cannot access data of any organisation, donor or hospital.

The blood bank web application is made using react which is popular fronted framework, database used is mongodb, backend using node. During these project I mainly refered to official documentaions for any doubt or syntax. At times I encountered error I took help of my friends and online community at stackoverflow was also very helpful.





Backend packages

bcryptjs => to encrypt password

colors => to display colorful user friendly logs on console.

concurrently => backend runs on port 8080 and frontend react has default port of 3000 to run these both servers traditionally we had to open 2 terminals but with the help of these package we can run both the server with using a single command. rest the package will take care of in background

dotenv => The `dotenv` package will automatically read the `.env` file and load the defined environment variables into the `process.env` object. You can now use these variables throughout your application.

express => Express is  **a node js web application framework that provides broad features for building web and mobile applications** . It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.

jsonwebtoken => [JSON Web Token](https://www.geeksforgeeks.org/json-web-token-jwt/) is an open standard for securely transferring data within parties using a JSON object. JWT is used for stateless authentication mechanisms for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server. Here, we will implement the JWT authentication system in NodeJs.

mongoose => Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a way to interact with MongoDB using a more convenient and structured API, allowing you to define schemas and models for your data.

morgan => Morgan is a Node.js middleware that can be used to log HTTP requests and errors. It is a popular choice for logging in Express applications, as it is easy to use and provides a variety of formatting options.

nodemon => `nodemon` is a popular tool in the Node.js ecosystem that helps developers automate the process of restarting their server whenever changes are detected in their code. It's particularly useful during development to streamline the coding process without having to manually stop and restart the server every time you make a change.

Frontend Packages:

react-toastify => `react-toastify` is a popular library used in React applications to display notification messages in a user-friendly and customizable way. However, it's important to note that `react-toastify` is specifically designed for use in React front-end applications.

react-scripts => `react-scripts` is a set of scripts and configuration used in React applications created with `create-react-app`, a popular toolchain for quickly setting up and building React applications with minimal configuration.

react-router-dom => `react-router-dom` is a popular library used for handling routing and navigation in React applications. It allows you to create dynamic, single-page applications (SPAs) where different components are rendered based on the URL path, without causing a full page reload.

react-redux =>

React redux maintains the state of the application in a single place called Redux store. React component can get the latest state from the store as well as change the state at any time. Redux provides a simple process to get and set the current state of the application and involves below concepts.

**Store** − The central place to store the state of the application.

**Actions** − Action is an plain object with the type of the action to be done and the input (called payload) necessary to do the action.

***Reducers*** − Reducers are pure functions used to create a new state based on the existing state and the current action. It returns the newly created state.

***Action creators*** − *Action creator* creates an action with proper action type and data necessary for the action and returns the action.

**Component** − Component can connect to the store to get the current state and dispatch action to the store so that the store executes the action and updates it’s current state.

react-icons => Certainly! In React, the `react-icons` library is a popular choice for adding icons to your applications. It provides a wide range of icon sets and makes it easy to integrate icons into your components.

react-dom => The `react-dom` package as the name implies is the glue between React and the DOM. Often, you will only use it for one single thing: mounting your application to the `index.html` file with `ReactDOM.render()`.

react => The `react` package holds the react source for components, state, props and all the code that is react.

moment => Moment. js is a powerful library that  **provides a simple way to manipulate and format dates and times in JavaScript** .

axios => Axios is a popular HTTP client library that makes it easy to make asynchronous requests to APIs. It is a promise-based library, which means that it returns a promise object when you make a request. This makes it easy to handle the response from the API in your React code.

@reduxjs/toolkit => Certainly! `@reduxjs/toolkit` is a package provided by the Redux team to simplify and streamline the process of working with Redux in a React application. It is designed to reduce the amount of boilerplate code and configuration that is typically required when setting up Redux.
