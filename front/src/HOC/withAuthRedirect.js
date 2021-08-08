import React from "react";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component) => {
    const AuthRedirectComponent = (props) => {
        if (!props.logging.isUserLoggedIn) {
            return <Redirect to="/login" />;
        }
        return <Component {...props} />
      }
      return AuthRedirectComponent;
}
