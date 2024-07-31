import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from "react-toastify";


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/offers" element={<Offers/>}></Route>
              <Route path="/favorites" element={<Favorites/>}></Route>
              <Route path="/sign-in" element={<SignIn/>}></Route>
              <Route path="/sign-up" element={<SignUp/>}></Route>
              <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          </Routes>
        </Router>
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
        throwIfNamespace={false} 
        />
      </>
      
    </div>
  );
}

export default App;
