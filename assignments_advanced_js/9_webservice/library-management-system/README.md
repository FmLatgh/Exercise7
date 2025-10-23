# Library Management System

## Project Overview
This is a simple Library Management System that allows users to register, login, add, remove, borrow and return books. 
The application has a backend API to handle data storage and a frontend interface to interact with the user.

## How to Run the Project

1. **Make sure that you've opened the library-management-system folder as a project in Webstorm**

2. **Backend Setup**:
    - Open the Terminal in Webstorm
    - Navigate to the `backend` directory with `cd backend`
    - Install dependencies: `npm install`
    - Start the server: `node index.js`

3. **End points and example requests Postman**
    - Install Postman: https://www.postman.com/downloads/
    - Import the example queries in Postman: [library_management_system.postman_collection.json](backend%2Fpostman_examples%2Flibrary_management_system.postman_collection.json)
    - You can also view the online documentation in your browser: https://documenter.getpostman.com/view/28537895/2sAY4rG5zp
    - You can use these queries to interact with the backend webservice.

4. **Running Tests on backend webservice**:
   - Unit tests: Navigate to the `backend` directory and run `npm test`.

5. **Frontend Setup**:
    - Open `frontend/index.html` in your browser.
    - If you try to add a book to the library, you will be redirected to the login page.

## MONGODB
The backend uses a MongoDB database to store the data. 
You need to use MongoDB Atlas:
* Create an account
* Create a new cluster
* Create a new database
* Create a new collection
* Update the connection string to the .env_template file in the backend directory
* Rename the .env_template file to .env

You can find the database schema in the `backend/models` directory.

Or you can create a local database. E.g., MongoDB Compass or MongoDB shell.
