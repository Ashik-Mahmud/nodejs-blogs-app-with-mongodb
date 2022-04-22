import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import CreatePost from './Pages/CreatePost/CreatePost';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ManagePost from './Pages/ManagePost/ManagePost';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/manage-post' element={<ManagePost />} />
          <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
