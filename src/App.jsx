import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appWrite/Auth";
import { login, logout } from "./Store/AuthSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from "react-router-dom"


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (!loading) ? 
  <div className="min-h-screen flex flex-wrap content between bg-gray-400">
    <div className="w-full block">
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div> 
  : <div>Loading</div>;
}

export default App;
