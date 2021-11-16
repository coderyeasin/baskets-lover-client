import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";
import basketsInitialization from "../Pages/Firebase/firebase.init";

//must include initialization 
basketsInitialization();



const useFirebase = () => {
    
    ////////////// STATES - User Changing Activity ////////////////
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [admin, setAdmin] = useState(false)
    // const [token, setToken] = useState('')

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

/////////////// Google Auth //////////////
    
    const loginWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                saveUser(user.email, user.displayName, 'PUT')
                setErrors('')
                const destination = location?.state?.from || '/home'
                console.log(destination);
                history.push(destination)

            }).catch((error) => {
                setErrors(error.message);
            })
            .finally(() => setIsLoading(false));
    }

///////////////////// Create user Auth ///////////////
    
    const newUserRegistration = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {


                setErrors('')
                const newUser = { email, displayName: name }
                setUsers(newUser)

                //save user to DB
                saveUser(email, name, 'POST')

                //update profile
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                   
                  });

                history.replace('/')
            })
            .catch((error) => {
                setErrors(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    
////////////////////// Sign-In Auth //////////////////
    
    const handleUsersLogin = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/'
                history.push(destination)
                setErrors('')
            })
            .catch((error) => {
                setErrors(error.message);
            })
        .finally(() => setIsLoading(false))
    }
    
///////////////////// Observe & Catch user Activity ///////////
    
    useEffect(() => {
     const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
              const uid = user.uid;
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken)
                    // console.log(idToken);
                // })
            } else {
                setUsers({})
            }
         setIsLoading(false)
     });
        return () => unsubscribed;
    },[auth])
    
    ///////////////////////// Admin ////////////////////

    useEffect(() => {
        fetch(`https://arcane-peak-16137.herokuapp.com/orders/${users?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    },[users.email])
    
///////////////////// Log Out user /////////////////
    const logoutUsers = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

          }).catch((error) => {

          })
        .finally(() => setIsLoading(false))
    }
    
/////////////////// Save User Data to DB ///////////////
    const saveUser = (email, displayName, method) => {
        const order = { email, displayName };
        fetch('https://arcane-peak-16137.herokuapp.com/orders', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then();
    }

    /////////////////// return to use for validation /////////////
    return {
        users,
        errors,
        isLoading,
        admin,
        // token,
        setErrors,
        loginWithGoogle,
        newUserRegistration,
        handleUsersLogin,
        logoutUsers
    }

}
export default useFirebase;