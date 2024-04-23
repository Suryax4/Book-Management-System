# Bookstore API

This is a RESTful API for managing book entries in a bookstore.

## Prerequisites

Before running the API, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone this repository:

   git clone https://github.com/Suryax4/Book-Management-System

2. Install dependencies:

   cd Book-Management-System
   npm install

3. Set up environment variables:Create a .env file in the root directory of the project and provide the following variables:

   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookstore
   SECRET_KEY=your_secret_key_here

4. Start the MongoDB server:

   mongod

5. Run the API:

   npm run dev
   The API will start running on http://localhost:3000.

## API Endpoints

## Authentication

POST /api/auth/signup: Register a new user.
POST /api/auth/signin: Sign in with existing credentials.

## Book Operations

POST /api/book/createEntry: Create a new book entry. (Requires authentication)
GET /api/book/getAllEntry: Get all book entries. (Requires authentication)
PUT /api/book/updateEntry/:id: Update a book entry by ID. (Requires authentication)
DELETE /api/book/deleteEntry/:id: Delete a book entry by ID. (Requires authentication)
GET /api/book/filterEntry: Filter book entries by author or publication year. (Requires authentication)

## Authentication

To access the book-related endpoints, you need to authenticate by providing a valid JWT token in the request headers.

Example JWT token in headers:
Authorization: Bearer <jwt_token_here>
