# Project Documentation

## Getting Started

To run the application, you have two options:

1. **Docker (Recommended):** Ensure you have Docker installed. Clone the repository, navigate to the project directory,
   and run `docker-compose -p users-app up --build` to start the application.

2. **Local Development:**
    - Prerequisites: Node.js and npm installed.
    - Clone the repository and navigate to the project directory.
    - Install dependencies: `npm install`.
    - Create a `.env` file from `.env.example` and configure your environment.
    - Start the application: `npm run start:dev`.

## Endpoints

- **POST `/api/users`**:
    - Creates a user with only a username (requires JWT).

- **GET `/api/users`**:
    - Retrieves a list of all users (requires JWT).

- **POST `/api/auth/login`**:
    - Returns a JWT token.

- **POST `/api/auth/signup`**:
    - Registers a user with a password.

## Authentication

JWT (JSON Web Token) is required for protected endpoints. Include the token in the `Authorization` header
as `Bearer your-jwt-token`.

For more details on each endpoint, refer to the API documentation.

## Configuration

- **Database Configuration:** Configure the database connection in the `.env` file.
- **JWT Secret:** Configure the JWT secret in the `.env` file.
