import React from 'react'
import { Routing } from 'src/app/routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => (
  <>
    <Routing />
    <ToastContainer/>
  </>
)
