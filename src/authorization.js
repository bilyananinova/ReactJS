function authorization(user) {
    
    let isLoggedIn = false
    let isAdmin = false
    let currentUser = null;

    if (user?.accessToken) {
        isLoggedIn = true;
    }

    if (user?.uid === 's4ByKLPQlyWPJeMRydFM2XmFOSw1') {
        isAdmin = true;
    }

    if (isLoggedIn) {
        currentUser = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
        };
    }

    return {
        isLoggedIn,
        isAdmin,
        currentUser,
    }
}

export default authorization;  