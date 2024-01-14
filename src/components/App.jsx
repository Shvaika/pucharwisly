import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Layout = lazy(() => import("pages/layout/Layout"))
const Home = lazy(() => import("pages/Home/Home"))
const Komunikaty = lazy(() => import("pages/Komunikaty"))
const Zgloszenia = lazy(() => import("pages/Zgloszenia"))
const Teren = lazy(() => import("pages/Teren/Teren"))
const Kontakt = lazy(() => import("pages/Kontakt/Kontakt"))
const Aktualnosci = lazy(() => import("pages/Aktualnosci/Aktualnosci"))
const NewsDetailsPage = lazy(() => import("pages/NewsDetailsPage/NewsDetailsPage"))

 const App = () => {
   return (<>
     <Suspense fallback={<div>Ładowanie...</div>}>
       <Routes>
         <Route path='/' element={<Layout />} >
           <Route index element={<Home />} />
           
           <Route path='/komunikaty' element={<Komunikaty />} />

           <Route path='/aktualnosci' element={<Aktualnosci />} />
           <Route path='/aktualnosci/:newsId' element={
             <NewsDetailsPage />
           } >
           </Route>
           
           <Route path='/zgloszenia' element={<Zgloszenia />} />
           
           <Route path='/teren' element={<Teren />} />
           <Route path='/kontakt' element={<Kontakt />} />

         </Route>
         
         <Route path='*' element={< Navigate to="/" />} />

       </Routes>
     </Suspense>
   </>
   )
};
export default App