import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import UserContext from '../../../contexts/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let user = React.useContext(UserContext);

    return (
        <Route
            {...rest}
            render={props =>
                user?.isLogged ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to='/'
                        />
                    )
            }
        />
    )
};

export default PrivateRoute;