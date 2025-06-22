# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installation of required softwares
    - Install node and npm from https://nodejs.org
    - after installation validate
        - node -v
        - npm -v
    - Install Code Editor from https://code.visualstudio.com/

## How to run the React App
    1. Open terminal and move into app folder : cd my-react-app
    2. Install dependencies: npm install
    3. Run the development server: npm run dev
    4. Open another terminal and move into backend folder : cd my-react-app/backend
    5. Start the backend server: node server.js
    6. Access UI on http://localhost:5173
    7. Access backend Get API on http://localhost:5000/users

## Create react app using Vite (From scratch)
    1. Open your terminal (Command Prompt or VS Code terminal).
    2. Run the following commands: npm create vite@latest my-react-app
    3. You'll see a prompt like this:
        ✔ Project name: › my-react-app
        ✔ Select a framework: › React
        ✔ Select a variant: › JavaScript (or TypeScript, your choice)
    4. Then, move into your new app folder: cd my-react-app
    5. Install dependencies: npm install
    6. Run the development server: npm run dev
    7. Open the browser and go to: http://localhost:5173
    8. Create a backend folder by running below commands: (This is also optional setp, only required when you create the app from scratch)
        . mkdir backend
        . cd backend
        . npm init -y
    9. Install Express and CORS:
        . npm install express cors (This is optional if already the modules improted)
    10. Start the backend server: node server.js


