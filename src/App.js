import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import ProtectedRoute from "./component/ProtectedRoute";

import "./App.css"
import SelectLanguage from "./component/starter/starterLanguage";
import GetStarted from "./component/starter/getStarted";
import Login from "./component/logInregister/login";
import DashBoard from "./component/dashBoard/dashBoard";
import InitialLoader from "./component/loader/initialLoader";

function App() {
  // const dispatch = useDispatch();
  // const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  const [appLoading, setAppLoading] = useState(true);
  setTimeout(() => {
    setAppLoading(false)
  }, 3000);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    
  });

  if (appLoading) {
    return <InitialLoader />; // Show a loader until fetchLoadUser is complete
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={SelectLanguage} />
        <Route exact path="/getStarted" Component={GetStarted} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/dashboard" Component={DashBoard} />
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
