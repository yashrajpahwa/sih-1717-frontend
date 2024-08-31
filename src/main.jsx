import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById("root")).render(
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin='anonymous'
    ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    ></link>
    <App />
  </>
);
