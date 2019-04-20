# Documentation for Links Storage Service

This service is developed using **express**  which facilates using latest cutting edge features of _JavaScript_
You need to build this code which generates **ES5** compatible code which can be excuted on any version of **Node.js** (Even though it has been made sure that the Node.js version is above 8.9 in `package.json`).

## Directory Structure

The application code starts inside **/app**. The code organization s fairly simple. It consists of Routes, Models and helpers.

- **/app**: Entry point of the application code
  - **/routes**: The defination of end points with bussiness logic.
  - **/models**:All the `mongoose` models are defined here
  - **/db**: Contains the DB connection code
  - 
  - **/helpers**: This contains  sendResponse function.


## Understanding of code

- Just look for the imports inside the file to navigate to the desired code block. Functions defined are small chunks of code which was kept as much readable as possible.

- For  DB options are set by user in `app/config/index.js` whose keys are self exlanatory.

