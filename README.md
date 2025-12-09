# 🛠️ Subscription Tracker API

A full-featured RESTful API for managing users and subscriptions, built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication**. This API supports secure user authentication, session handling with cookies, and complete CRUD operations for users and subscriptions.

---

## Features

- 🔐 **JWT Authentication** (via cookies or Bearer tokens)
- 👤 **User Management** (create, read, update, delete)
- 💳 **Subscription Management** (CRUD operations, user-specific subscriptions)
- 🧰 **MongoDB Integration** using Mongoose
- ⚙️ **Error Handling & Validation**

---

## 🏗️ Tech Stack

| Technology             | Description           |
| ---------------------- | --------------------- |
| **Node.js**            | JavaScript runtime    |
| **Express.js**         | Web framework         |
| **MongoDB + Mongoose** | Database & ODM        |
| **JWT**                | Authentication tokens |
| **bcryptjs**           | Password hashing      |
| **dotenv**             | Environment variables |
| **cookie-parser**      | Cookie management     |

---

## ⚙️ Environment Variables

Create `.env.development.local` and `.env.production.local` in the root folder:

```
PORT=3000
NODE_ENV=development
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/db_name
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 🧩 Installation

### Clone the repo

```bash
git clone https://github.com/Stamkopoulos/Subscription-Tracker.git
```

### Install dependencies

```bash
npm install
```

### Running the server

**Development mode:**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

---
