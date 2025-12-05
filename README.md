# Harsh User Service – Internship Project

This project is a simple User Management Service created during my internship.  
Its main purpose is to handle user-related operations such as creating accounts, logging in, and securing user data.

---

## ✨ What This Service Does
- Creates new user accounts  
- Allows users to log in  
- Validates user information  
- Stores data safely in the database  
- Uses tokens (JWT) for secure access  

---

## 📂 Project Layout (Short Overview)
harsh-user-service/
├──node_modules
├── src/
│ ├── routes/ 
│ ├── controllers/
│ ├── models/ 
│ ├── config/ 
│ └── utils/ 
├── server.js 
├── package.json 
└── .env # Environment settings (not uploaded)

## 🔧 How to Run the Project

###  Install all required packages
npm install

### Start the server
npm start


| Method | Endpoint  | Purpose             |
|--------|-----------|-------------------|
| POST   | /register | Create a new user  |
| POST   | /login    | Login & get token  |
| GET    | /profile  | Get user details   |


Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- BCrypt (for password hashing)

Author
Harsh Mishra
User Management Backend Service – Internship Project
