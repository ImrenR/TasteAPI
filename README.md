# TASTEAPI

**TASTEAPI** is a modern recipe web application built with **Vite + React**.  
It allows users to **search for recipes**, **view detailed ingredients and instructions**, and explore new dishes powered by a public food API.  

---

##  Features

- **Search Recipes:** Find meals by name or ingredients.  
- **Recipe Details:** View full ingredients and cooking instructions.  
- **Navigation:** Built with React Router for seamless page transitions.  
- **State Management:** Uses Context API and React Hooks for global state handling.  
- **API Integration:** Fetches data dynamically using Axios.  
- **Responsive UI:** Styled with modular CSS Modules and Styled Components for clean, modern layouts.  

---

## Tech Stack

| Category | Technologies |
|-----------|---------------|
| Frontend | React (Vite) |
| Routing | React Router DOM |
| State Management | Context API, React Hooks |
| API Handling | Axios |
| Styling | CSS Modules Styled Components |
| Deployment | GitHub Pages |

---

##  Project Structure
```
src/
│
├── assets/ 
├── components/ 
│ ├── footer/
│ ├── header/
│ └── navbar/
│
├── context/
│ └── RecipeProvider.jsx 
│
├── pages/ 
│ ├── about/
│ ├── details/
│ ├── errorPage/
│ ├── home/
│ └── login/
│
├── router/
│ ├── AppRouter.jsx
│ └── PrivateRouter.jsx
│
└── App.jsx 
```


---

## Installation & Setup

1. **Clone the repository**

   git clone https://github.com/ImrenR/TASTEAPI.git
   cd TASTEAPI

   npm install 

   npm run dev

## Learnings

**This project helped me practice:**
- React Router and nested routes
- Context API for global state
- Axios API integration
- Modular React architecture
- Component reusability and clean structure
- Styling with CSS Modules and Styled Components

##  License

This project is licensed under the **MIT License**

Feel free to use and modify it for your own projects.