import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {

    const { users, admin, isLoading } = useAuth();

    if (isLoading) {
       return <Spinner animation="grow" size="sm" />
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
        users?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;