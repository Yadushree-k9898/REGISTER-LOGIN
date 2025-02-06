# Register-Login System

A simple authentication system built using **React.js** for the frontend and **Node.js (Express & MongoDB)** for the backend. This system allows users to register and log in securely, with JWT authentication and local storage management.

## Features

- **User Registration**: Users can sign up with name, date of birth, email, and password.
- **User Login**: Authenticate with email and password.
- **Protected Routes**: Dashboard access only for logged-in users.
- **JWT Authentication**: Secure login using JSON Web Tokens.
- **LocalStorage Management**: Store authentication tokens in local storage.
- **Styled with Tailwind CSS**: A responsive and modern UI design.

---

## Tech Stack

### Frontend (React.js)
- React.js
- React Router DOM
- Axios (for API requests)
- Tailwind CSS (for styling)
- React Icons
- React Toastify (for notifications)

### Backend (Node.js & Express)
- Node.js
- Express.js
- MongoDB (Mongoose for database interaction)
- JSON Web Token (JWT) for authentication
- bcryptjs (for password hashing)
- CORS (Cross-Origin Resource Sharing)

---

## Installation & Setup

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your machine.

### Clone the Repository
```sh
git clone https://github.com/your-username/register-login-system.git
cd register-login-system
```

### Backend Setup
1. Navigate to the backend folder:
```sh
cd backend
```
2. Install dependencies:
```sh
npm install
```
3. Create a `.env` file in the `backend` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
4. Start the backend server:
```sh
npm start
```

### Frontend Setup
1. Navigate to the frontend folder:
```sh
cd frontend
```
2. Install dependencies:
```sh
npm install
```
3. Start the React app:
```sh
npm run dev
```

---

## API Routes

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user and return a JWT token
- `GET /api/auth/user` - Fetch authenticated user details

### Protected Routes
- Users must be authenticated to access certain pages (like the dashboard).

---

## Project Structure
```
register-login-system/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── .env
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── main.jsx
│   ├── styles/
│   ├── .env
│
│── README.md
```

---

## Future Improvements
- Implement **Google OAuth** for social login.
- Add **password reset** functionality.
- Implement **role-based access control (RBAC)**.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any queries, reach out to **[Yadushree K](https://yadushree.dev)** or email at **kyadushree47@gmail.com**.

