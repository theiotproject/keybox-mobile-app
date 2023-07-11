import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut as signOutFirebase } from "firebase/auth";
import { auth } from "../firebase";
import { Dialog, Portal } from "react-native-paper";
import SignOutDialog from "../components/SignOutDialog";

// -------------------------------------------------
// SIGNING UP
export const signUp = ( auth, email, password, username ) => {
        
    //Create user + return user or error
    return (
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            const user = auth.currentUser;
            console.log('Registered with: ', user.email);
            // Setting Username
            updateProfile(user, {
                displayName: username,
            })  
        })
        .catch(error => alert(error.message))
    )
}


// -------------------------------------------------
// SIGNING IN
export const signIn = ( email, password ) => {
    // Sign in to app
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user = auth.currentUser;
        console.log('Logged in with: ', user.email);
    })
    .catch(error => alert(error.message));
    
}


// -------------------------------------------------
// SIGNING OUT
export const signOut = () => {
    signOutFirebase(auth);
}
