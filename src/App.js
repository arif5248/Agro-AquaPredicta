import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import ProtectedRoute from "./component/ProtectedRoute";
import Loader from "./component/loader/loader";

import "./App.css"
import SelectLanguage from "./component/starter/starterLanguage";
import GetStarted from "./component/starter/getStarted";

function App() {
  // const dispatch = useDispatch();
  // const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  const [appLoading, setAppLoading] = useState(true);
  setTimeout(() => {
    setAppLoading(false)
  }, 2000);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    
  });

  if (appLoading) {
    return <Loader />; // Show a loader until fetchLoadUser is complete
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={SelectLanguage} />
        <Route exact path="/getStarted" Component={GetStarted} />
        {/* <Route
          exact
          path="/account"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
        
        
        
        
        {/* <Route exact path="password/forgot" Component={ForgotPassword}/>
        <Route exact path="/login" Component={LoginSignUp} /> */}
      </Routes>
    </Router>
  );
}

export default App;
