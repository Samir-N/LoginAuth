# 🔐 LoginAuth

# About

A modern user authentication system built using React, Tailwind CSS, and Appwrite.  
This project includes features like login, registration with Vite and Tailwind.

---

## 🚀 Features

- 🔐 User Login & Registration  
- 💡 Appwrite Authentication Integration  
- 🎨 Tailwind CSS Styling  
- ⚡ Fast Vite + React Setup  

---

## 📁 Project Structure

```
LoginAuth/
├── public/
├── src/
│   ├── api/                # Appwrite API setup and services
│   ├── assets/             # Images, icons, logos, etc.
│   ├── components/         # Reusable UI components
│   ├── css/                # Custom Tailwind or global styles
│   ├── pages/              # Route pages (Login, Register, Home, etc.)
│   ├── utils/              # Utility functions, context, hooks
│   ├── App.jsx             # Root App component
│   └── main.jsx            # App entry point
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
├── eslint.config.js
└── vite.config.js
```

---

## 🧑‍💻 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/Samir-N/LoginAuth.git
cd LoginAuth
```

## 2. Install dependencies

```bash
npm install
```

## 3. Set up your environment variables

Create a .env file in the root directory and add:

```ini
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

Replace the placeholder values with your actual Appwrite project details.

## 4. Run the development server

```bash
npm run dev
```

Your app will be available at http://localhost:5173 by default.

---

## 📋 Prerequisites

Before you start, make sure you have Node.js installed on your machine.

---

## 🛠️ Tech Stack

### Frontend: 
React, Vite, Tailwind CSS

### Backend: 
Appwrite (Auth, Database)

### Tooling: 
ESLint, GitHub, Vite

---

## 🎥 Tutorial Source

This project is based on the tutorial by CodeWithSami.



