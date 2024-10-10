import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Layout from './Layout';
import { Home } from './Pages/Home';
import { Cards } from './Pages/Cards';
import { AboutUs } from './Pages/AboutUs';
import { ViewDetails } from './Pages/ViewDetails';
import { ContactUs } from './Pages/ContactUs';
import { Review } from './Pages/Review';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/des/:Id" element={<ViewDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/review" element={<Review />} />
        </Route>
      </Routes>
    </BrowserRouter>

);