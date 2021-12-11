import React from "react";
import { getUser } from '../services/authService';
import { auth } from '../firebase/firebaseConfig';

let UserContext = React.createContext();

export function AuthProvider({ children }) {
    let [isLogged, setIsLogged] = React.useState(false);
    let [isAdmin, setIsAdmin] = React.useState(false);
    let [user, setUser] = React.useState(null);

    React.useEffect(() => {
        auth.onAuthStateChanged(user => {

            if (user) {
                setIsLogged(true);
                let userId = user.uid;

                if (userId === 'ICSVrnbQ9KbKpZiaF2QTR4Mwcjw1') {
                    setIsAdmin(true);
                }

                getUser(userId)
                    .then(user => {
                        setUser({ ...user.data(), id: userId, isAdmin, isLogged })
                    })
            } else {
                setUser(null);
            }

        });
    }, [user, isAdmin, isLogged]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;