# 🔐 Node.js JWT Authentication API

A secure and scalable Authentication API built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT (JSON Web Token)**, and **Bcrypt.js**.

This project provides complete user authentication functionality including:

* User Registration
* User Login
* JWT Token Generation
* Protected Routes
* User Profile Access
* User Update
* User Deletion
* Logout from All Devices
* Password Hashing
* Authorization Middleware

---

# 🚀 Tech Stack

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Backend Runtime       |
| Express.js | Web Framework         |
| MongoDB    | Database              |
| Mongoose   | ODM                   |
| JWT        | Authentication        |
| Bcrypt.js  | Password Hashing      |
| dotenv     | Environment Variables |

---

# 📁 Project Structure

```
project-root/
│
├── controller/
│   └── userController.js
│
├── middleware/
│   ├── auth.js
│   └── HttpError.js
│
├── model/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── config/
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/project-name.git
```

### Move to Project Folder

```bash
cd project-name
```

### Install Dependencies

```bash
npm install
```

### Create Environment File

Create `.env` file in root directory.

```env
```

### Start Server

```bash
npm start
```

or

```bash
npm run dev
```

---

# 🔑 Authentication Flow

## Register User

User creates a new account.

<img width="1917" height="896" alt="Screenshot 2026-06-17 090548" src="https://github.com/user-attachments/assets/b34a7482-5bc3-45be-bd38-adfae22325cb" />


### Endpoint

```http
POST /add
```

### Request Body

```json
{
  "name":"Ankit",
  "email":"ankit@gmail.com",
  "password":"12345678"
}
```

---

## Login User

User logs in using email and password.

<img width="1915" height="891" alt="Screenshot 2026-06-17 090620" src="https://github.com/user-attachments/assets/4d7308a4-5d46-4df5-8e55-070cbefc395b" />



### Endpoint

```http
POST /login
```

### Request Body

```json
{
  "email":"ankit@gmail.com",
  "password":"12345678"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "_id": "123456"
  },
  "token": "JWT_TOKEN"
}
```

---

# 🔒 Protected Routes

Protected routes require JWT Token in Authorization Header.

### Header Format

```http
Authorization: Bearer JWT_TOKEN
```

---

## Get Logged In User

<img width="1913" height="901" alt="Screenshot 2026-06-17 090748" src="https://github.com/user-attachments/assets/d59d44ff-52cc-4b23-b7a4-7574cd417708" />




### Endpoint

```http
POST /authLogin
```

### Header

```http
Authorization: Bearer JWT_TOKEN
```

---

## Update User Profile

<img width="1918" height="890" alt="Screenshot 2026-06-17 090839" src="https://github.com/user-attachments/assets/42717908-b1fe-4bbc-b55c-5b32c5208b9c" />


### Endpoint

```http
PATCH /updateAuth
```

### Allowed Fields

```json
{
  "name":"Updated Name"
}
```

or

```json
{
  "password":"newpassword123"
}
```

---

## Delete Logged In User

### Endpoint

```http
DELETE /deleteAuth
```

### Header

```http
Authorization: Bearer JWT_TOKEN
```

---

## Logout From All Devices

Removes all saved JWT tokens from database.

### Endpoint

```http
DELETE /deleteAllUser
```

### Header

```http
Authorization: Bearer JWT_TOKEN
```

---

# 🔐 Security Features

### Password Hashing

Passwords are hashed using Bcrypt before saving to database.

```javascript
bcrypt.hash(password, 8)
```

---

### JWT Authentication

JWT token is generated after successful login.

```javascript
jwt.sign(
    { _id: user._id },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
)
```

---

### Authorization Middleware

Middleware verifies:

* JWT validity
* User existence
* Token existence in database

```javascript
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

---

# 📌 API Endpoints Summary

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| POST   | /add           | Register User          |
| GET    | /getAllUser    | Get All Users          |
| POST   | /login         | Login User             |
| POST   | /authLogin     | Get Authenticated User |
| PATCH  | /updateAuth    | Update User            |
| DELETE | /deleteAuth    | Delete User            |
| DELETE | /deleteAllUser | Logout All Devices     |

---

# 🧪 Testing with Postman

### Register

```http
POST /add
```

### Login

```http
POST /login
```

Copy token from response.

### Access Protected Route

```http
Authorization: Bearer YOUR_TOKEN
```

---

# 📚 Learning Concepts Covered

* REST APIs
* Express Routing
* MongoDB CRUD Operations
* Mongoose Models
* Schema Methods
* Schema Statics
* Middleware
* Authentication
* Authorization
* JWT
* Password Hashing
* Environment Variables
* Error Handling

---

# 👨‍💻 Author

**Ankit Mor**

Backend Developer | Node.js Developer

---

# ⭐ Support

If you found this project useful:

* Star the repository ⭐
* Fork the repository 🍴
* Contribute improvements 🚀

---

## Happy Coding 🚀

