import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
const Layout = lazy(() => import("pages/layout/Layout"))
const Home = lazy(() => import("pages/Home"))
const Movies = lazy(() => import("pages/Movies"))
const Cast = lazy(() => import("pages/Cast"))
const Reviews = lazy(() => import("pages/Reviews"))
const MovieDetails = lazy(() => import('pages/MovieDetails'))

 const App = () => {
   return (<>
     <Suspense fallback={<div>Loading...</div>}>
     <Routes>
       <Route path='/' element={<Layout />} >
         <Route index element={<Home />} />
         <Route path='/movies' element={<Movies />} />
      
         <Route path='/movies/:movieId' element={
           <MovieDetails />
         } >
           <Route path='/movies/:movieId/cast' element={<Cast />} />
         
           <Route path='/movies/:movieId/reviews' element={<Reviews/>} />
         </Route>
   
         </Route>
         
             <Route path='*' element={< Navigate to="/" />} />

       </Routes>
       </Suspense>
   </>
   )
};
export default App