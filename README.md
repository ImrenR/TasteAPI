# 🍽️ TASTEAPI

A React-based recipe search application that allows users to find meals using [TheMealDB API](https://www.themealdb.com/api.php).  
This project demonstrates how to use **Context API**, **Private Routing**, and **Axios** to create a smooth, real-world recipe browsing experience.

---

##  Features

-  **Login Authentication** (simple credential check)
- **Recipe Search** powered by TheMealDB API
- **Global State Management** using Context API
- **Private Routing** with React Router DOM
- **Loading & Error Handling**
- **Automatic Redirect** from 404 Page
- **Clean Component-Based Architecture**

---

## Project Structure
```
TASTEAPI/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── navbar/
│   ├── context/
│   │   └── RecipeProvider.jsx
│   ├── pages/
│   │   ├── about/
│   │   ├── details/
│   │   ├── errorPage/
│   │   ├── home/
│   │   └── login/
│   ├── router/
│   │   ├── AppRouter.jsx
│   │   └── PrivateRouter.jsx
│   ├── App.css
│   └── App.jsx
│
└── package.json
```

## Authentication
username : imren
password: 1234

## API reference

BASE URL : https://www.themealdb.com/api/json/v1/1/search.php?s=${query}


## Not Found page

**When a user visits a non-existent route:**

- Displays a message: “Oops!... Something went wrong”

- A countdown timer (5 seconds)

- Redirects automatically to the /home page.


## Technology Used:

- React.js

- Context API

- React Router DOM

- Axios

- CSS Modules

- Styled Components
