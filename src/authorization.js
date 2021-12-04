function authorization(user) {
    let isLoggedIn = false
    let isAdmin = false
    let currentUser = null;

    if (user?.accessToken) {
        isLoggedIn = true;
    }

    if (user?.uid === 'GZ6ZSEzc5VRUjR2Ygh1VsSje9mx2') {
        isAdmin = true;
    }

    if (isLoggedIn) {
        currentUser = {
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