import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage/HomePage";
import SpotsFormPage from "./components/SpotsFormPage/SpotsFormPage";
import SpotReadOne from "./components/SpotReadOne/SpotReadOne";
import SpotsViewAll from "./components/SpotsViewAll/SpotsViewAll";
import SpotEdit from "./components/SpotEdit/SpotEdit";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path={"/spots/new"}>
            <SpotsFormPage />
          </Route>
          <Route exact path={"/spots/:id"}>
            <SpotReadOne />
          </Route>
          <Route exact path={"/spots/"}>
            <SpotsViewAll />
          </Route>
          <Route path={"/spots/edit/:id"}>
            <SpotEdit />
          </Route>
          <Route>Page Not Found</Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
