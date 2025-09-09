import { createContext, useEffect, useState } from 'react';

import auth from './Firebase.init'
import { signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // loading (wait untill we get response from firebase)
    const [loading, setLoading] = useState(true);

    // Login or Signin by email/password
    function signin(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign-up or register or create user by email/password
    function signup(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Signin or Signup by Google
    const googleProvider = new GoogleAuthProvider();
    function signinWithGoogle() {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Signin or Signup by Github
    const githubProvider = new GithubAuthProvider();
    function signinWithGithub() {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // get the user information and check is the current user logged in or logged out
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false); // set loading as false bcz now we get the user/logged in
        })
        return(
            () => {
                unSubscribe();
            }
        )
    }, [])
    console.log(user);

    // Sign out 
    function signout() {
        setLoading(true);
        return signOut(auth);
    }



    const authInfo = { signin, signup, signinWithGoogle, signinWithGithub, user, signout, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;