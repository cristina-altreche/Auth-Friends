import React from "react";
import { Route, Redirect } from "react-router-dom";

//THIS IS USUALLY STANDARD SKELETON WITH PRIVATE ROUTES///

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          console.log("Redirecting to login");
          return <Redirect to="login" />;
        }
      }}
    />
  );
  //You have successfully made a Private Route.
  //You can now go back to App.js import this and use it.
};

export default PrivateRoute;
