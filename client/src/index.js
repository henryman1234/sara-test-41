import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetails from './pages/PostDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import CreatePosts from './pages/CreatePosts';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dasboard from './pages/Dashboard';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Logout from './pages/Logout';
import Authors from './pages/Authors';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      // deja représentée
      {path: "posts/:id", element: <PostDetails/>},
      // deja représentée
      {path: "login", element: <Login/>},
      // deja représentée
      {path: "register", element: <Register/>},
      // deja représentée
      {path: "authors", element: <Authors/>},
      // deja représentée
      {path: "create", element: <CreatePosts/>},
      // deja représentée
      {path: "profile/:id", element: <UserProfile/>},
      // deja représentée
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      // deja représentée
      {path: "posts/users/:id", element: <AuthorPosts/>},
      // deja représentée
      {path: "myposts/:id", element: <Dasboard/>},
      // deja représentée
      {path: "posts/:id/edit", element: <EditPost/>},
      // deja représentée
      {path: "posts/:id/delete", element: <DeletePost/>},
      {path: "logout", element: <Logout/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
