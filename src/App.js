import React, { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js";
import LoginPage from "./pages/LoginPage.js";
import SearchPage from "./pages/SearchPage";
import SignUpPage from "./pages/SignUpPage";
import TopMenu from "./Layout/TopMenu";
import app from "./firebase.js";
import db from "./firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
  }, []);

  const [data, setData] = useState([]);
  const [activeMenu, setActiveMenu] = useState("home");

  // firebase
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <MainPage activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </>
          )}
        />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/register" render={() => <SignUpPage />} />
        <Route
          exact
          path="/search"
          render={() => (
            <>
              <TopMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <SearchPage
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                postList={data}
              />
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
