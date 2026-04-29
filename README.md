# Event Manager (MERN Stack)

A full-stack Event Management web application built using the MERN stack (MongoDB, Express, React, Node.js).
This application allows users to browse events, register/login, and book tickets. Admins can manage events and users.

---

## Features

### User

* Register and Login (JWT Authentication)
* View all events
* Book events
* View booking history

### Admin

* Create events
* Update events
* Delete events
* Manage users and bookings

---

## Tech Stack

* Frontend: React.js, Tailwind CSS
* Backend: Node.js, Express.js
* Database: MongoDB Atlas
* Authentication: JWT
* Other: Axios, Nodemailer

---

## Project Structure

```
Event-Manager/
│
├── client/        # React frontend
├── server/        # Node.js backend
├── .env           # Environment variables
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/event-manager.git
cd event-manager
```

---

### 2. Setup Backend

```
cd server
npm install
npm run dev
```

---

### 3. Setup Frontend

```
cd client
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the server folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
PORT=5000
```

---

## API Endpoints (Example)

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | /api/auth/register | Register user  |
| POST   | /api/auth/login    | Login user     |
| GET    | /api/events        | Get all events |

---

## Usage

* Open frontend at: http://localhost:3000
* Backend runs at: http://localhost:5000

---

## Notes

* Do not upload `.env` file to GitHub
* Make sure MongoDB Atlas is properly configured
* Ensure your IP is whitelisted in MongoDB

---

## Author

Vishal Sharma
