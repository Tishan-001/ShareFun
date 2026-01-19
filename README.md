# ShareFun

ShareFun is a full-stack social media application that allows users to share posts, interact with others, and manage their profiles. It features a robust backend for user authentication and data management, coupled with a responsive and modern frontend interface.

## Features

-   **User Authentication**: Secure registration and login using JWT and bcrypt.
-   **Profile Management**: Users can view and update their profiles.
-   **Post Creation & Sharing**: Users can create posts with text and media.
-   **Social Interaction**: Like and comment on posts.
-   **Responsive Design**: optimized for various screen sizes.

## Tech Stack

### Client

-   **React**: UI library for building the interface.
-   **Redux Toolkit**: State management.
-   **React Router**: Navigation and routing.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **Axios**: HTTP client for API requests.
-   **React Hook Form**: Form handling.

### Server

-   **Node.js & Express**: Backend runtime and framework.
-   **MongoDB & Mongoose**: Database and object modeling.
-   **JWT (JSON Web Tokens)**: Authentication.
-   **Nodemailer**: Email services (e.g., for password resets).
-   **Helmet & CORS**: Security middlewares.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v16 or higher)
-   [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud instance)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Tishan-001/ShareFun.git
    cd ShareFun
    ```

2.  **Install Server Dependencies**
    ```bash
    cd server
    npm install
    ```

3.  **Install Client Dependencies**
    ```bash
    cd ../client
    npm install
    ```

### Environment Variables

Create a `.env` file in the `server` directory and add the following variables:

```env
PORT=8800
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=1d
```

*(Note: Adjust the variable names if your internal configuration differs, e.g., `MONGO_URI` instead of `MONGO_DB_URL` based on `dbConfig`)*

### Running the Application

1.  **Start the Server**
    ```bash
    cd server
    npm start
    ```
    The server will run on `http://localhost:8800`.

2.  **Start the Client**
    Open a new terminal terminal:
    ```bash
    cd client
    npm start
    ```
    The client will run on `http://localhost:3000`.

## Project Structure

```
ShareFun/
├── client/         # React frontend application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── redux/
├── server/         # Express backend application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── views/
└── README.md
```
