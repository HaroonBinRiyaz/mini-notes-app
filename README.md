# 📝 Mini Notes App

A simple full-stack notes application where users can securely register, log in, and manage their personal notes.
Each user gets a private notes space powered by a REST API and JWT authentication.
This project is built to understand core backend fundamentals — not just use frameworks blindly.

# 🚀 Features

- User Registration
- User Login (JWT Authentication)
- Create Notes
- View Personal Notes Only
- Delete Notes
- Protected Routes (Token based access)
- Minimal clean UI

# 🧠 What I Learned

- This project focuses on understanding how real applications work internally:
- How frontend talks to backend (HTTP requests)
Authentication flow using JWT
- Middleware & protected routes
- Database schema design with Mongoose
- CRUD operations
- Handling async operations
- Separating controller / route / model logic



# 🛠 Tech Stack

### Frontend
- HTML
- CSS
- Vanilla JavaScript (Fetch API)
- Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## 📁 Project Structure

~~~ Project Structure
Mini-Notes-App
│
├── models
│   ├── users.model.js
│   └── notes.model.js
│
├── controllers
│   ├── user.controller.js
│   └── note.controller.js
│
├── routes
│   ├── user.routes.js
│   └── notes.routes.js
│
├── middleware
│   └── auth.middleware.js
│
├── public
│   ├── index.html
│   ├── notes.html
│   ├── script.js
│   └── notes.js
│
├── server.js
└── package.json
~~~

## ⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/mini-notes-app.git in Terminal
cd mini-notes-app
2. Install dependencies
npm install
3. Create .env file

#### Create a .env file in the root directory:
~~~
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
~~~
4. Run the server
npm run dev


#### Server runs at:

http://localhost:3000

## 🔐 Authentication Flow

- User registers → stored in database
- User logs in → server generates JWT token
- Token stored in browser localStorage
- Every request sends token in headers
- Backend verifies token → allows access


## 🎯 Purpose of Project

This project was built to strengthen backend fundamentals instead of depending on libraries that hide the logic.

Goal:
Understand how apps actually work under the hood.

### Future Improvements

- Edit notes
- Timestamps UI
- Better UI styling
- Deploy online
- Password hashing (bcrypt)
- Refresh tokens

## Author

Name: Haroon Riyaz

Contact: mirharoonriyaz@gmail.com