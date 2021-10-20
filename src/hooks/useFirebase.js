import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../components/Home/Login/Firebase/firebase.init";


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true)



    // google sign in 

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // register with email and password

    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError(" Password must be 6 characters long")
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have 2 upper characters')
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }



    const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const registerNewUser = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                verifyEmail();
                setUserName();
                setUser(result.user)
                console.log(result.user)
                window.location.reload();
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // verifyEmail

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }


    const handleNameChange = e => {
        setName(e.target.value);

    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }




    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }


    // observe user state changing 

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        registerNewUser,
        processLogin,
        error,
        setError,
        toggleLogin,
        isLogin,
        isLoading,
        setIsLoading,
        handleNameChange,
        setUserName


    }
}
export default useFirebase;