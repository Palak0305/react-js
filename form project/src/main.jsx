import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import UserContest from './contextfile/UserContest.jsx';

createRoot(document.getElementById('root')).render(
  <UserContest>
       <App />
    <ToastContainer />
  </UserContest>
)