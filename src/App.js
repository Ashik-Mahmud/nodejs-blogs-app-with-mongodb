import { createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import useFirebase from './Hooks/useFirebase';
import Blogs from './Pages/Blogs/Blogs';
import CreatePost from './Pages/CreatePost/CreatePost';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from "./Pages/Login/SignUp/SignUp";
import ManagePost from './Pages/ManagePost/ManagePost';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';
export const AppContext = createContext(null);
function App() {
    const {user, isAuth} = useFirebase();
   /*  console.log(
       "%cWarning dont do any thing here get back",
       `font-size: 3rem; color: red;`
    ) */
  return (
    <>
    <Toaster />
     <AppContext.Provider value={{isAuth,user}}>
     <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/create-post' element={<RequireAuth><CreatePost /></RequireAuth>} />
          <Route path='/manage-post' element={<RequireAuth><ManagePost /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />

          {/* not found route */} 
          <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
     </AppContext.Provider>
    </>
  );
}

export default App;
