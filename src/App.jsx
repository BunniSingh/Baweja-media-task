import React from 'react'
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Todo from './components/Todos/Todo';
import GitHub from './components/Github/GitHub';
import Layout from './Layout/Layout';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: < Layout/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/todo',
        element: <Todo />
      },
      {
        path: '/github',
        element: <GitHub />
      }
    ],
  }
])

const App = () => {
  return (
      <RouterProvider router={router} >
        <Layout />
      </RouterProvider>
  )
}

export default App