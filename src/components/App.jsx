import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "pages/layout/Layout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";

 const App = () => {
   return (<>
     
     <Routes>
       <Route path='/' element={<Layout />} >
         <Route index element={<Home/>}/>
         <Route path='/movies' element={<Movies />} >
        
         </Route>
            <Route path='/movies/:movieId' element={<MovieDetails/>} />
         <Route path='/movies/:movieId/cast' element={<></>} />
        <Route path='/movies/:movieId/reviews' element={<></>} />
       </Route>
       <Route path='*' element={<>404</>} />
     </Routes>
   </>
   );
};
export default App