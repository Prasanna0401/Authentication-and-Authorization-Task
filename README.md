# User Data Management

## Description

This project is designed to manage user data, including usernames, emails, and securely hashed passwords. The application allows for the creation, retrieval, and management of user accounts while ensuring that sensitive information is stored securely.

## Technologies Used

- Node.js: JavaScript runtime for building the application
- Express: Web framework for Node.js
- MongoDB: NoSQL database for storing user data
- bcrypt: Library for hashing passwords
- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your MongoDB URI, JWT secret and port number.
4. Run `node index.js` to start the server.
5. Use Postman to test the API endpoints.

## Features

- Create new user accounts
- Retrieve user information
- Securely store passwords using hashing
- Validate user credentials during login

## API Endpoints

- **POST** `/api/v1/auth/register` - Register a new user
- **POST** `/api/v1/auth/login` - Login a user and receive a JWT
- **GET** `/api/v1/auth/user` - Get user information (protected route)

## POSTMAN Documentation URL

[POSTMAN API Documentation URL: ](https://documenter.getpostman.com/view/39260343/2sAYBREt9q)