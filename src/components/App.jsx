import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Layout from "pages/layout/Layout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";

const MovieDetails = lazy(() => import('pages/MovieDetails'))

 const App = () => {
   return (<>
     
     <Routes>
       <Route path='/' element={<Layout />} >
         <Route index element={<Home />} />
         <Route path='/movies' element={<Movies />} />
      
         <Route path='/movies/:movieId' element={
           <Suspense allback={<div>Loading...</div>}><MovieDetails /></Suspense>
         } >
           <Route path='/movies/:movieId/cast' element={<Cast />} />
         
           <Route path='/movies/:movieId/reviews' element={<Reviews/>} />
         </Route>
   
       </Route>
       <Route path='*' element={<>404</>} />
     </Routes>
   </>
   )
};
export default App