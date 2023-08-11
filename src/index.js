import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterBlog from './RouterBlog';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// dil seçeneği
import './internationalization/i18nlanguage'



// ROOT 
const root = ReactDOM.createRoot(document.getElementById('root'));

// RENDER
root.render(
  <React.StrictMode>
    <BrowserRouter>
      < RouterBlog />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
