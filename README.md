# Bookify Backend

Welcome to the Bookify backend repository! This Node.js application serves as the backend for the Bookify-Frontend app, utilizing Express.js for handling API routes and MongoDB Atlas as the database. Follow the instructions below to install and implement the code.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/evitadasy/Bookify-Backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bookify-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and configure it with your MongoDB Atlas connection string and any other necessary environment variables. You can use the provided `.env.example` as a starting point.

5. Start the server:

    ```bash
    npm start
    ```

The server will be running on `http://localhost:3000`.

## Configuration

The application uses a `.env` file for configuration. Ensure that you have the following variables set:

- `MONGODB_URI`: Your MongoDB Atlas connection string.
- (Add any other environment variables specific to your application.)


Example `.env` file:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
```

## API Endpoints

### Cities

- GET /api/cities
- GET /api/cities/:cityName

### Bookings

- GET /api/bookings
- POST /api/bookings/:eventId

### Events

- GET /api/events
- GET /api/events/:eventId
- GET /api/events/type/:eventType/:city
- GET /api/events/type/:eventType
- GET /api/events/city/:city

Feel free to inspect the code in the routes directory to understand available endpoints and functionalities.

## Deployment

The Bookify backend is currently deployed on Render at https://bookify-zm4t.onrender.com. Ensure that you update your frontend application to make requests to this endpoint.
