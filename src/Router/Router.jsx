import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieBooking from "../Pages/MovieBooking";
import Trailer from "../Pages/Movies";



const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MovieBooking />} path="/" />
          <Route element={<Trailer />} path="/trailer" />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
