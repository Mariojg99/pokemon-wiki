import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { facebook, google } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const loginEmailPassAsync = (email, password) => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            // dispatch(loginSync(user.uid, user.displayName))
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const loginGoogleAsync = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(loginSync(user.uid, user.displayName))
        })
        .catch(error => {
            console.log(error);
        })
    }
}

// export const loginFacebookAsync = () => {
//     return() => {
//         const auth = getAuth();
//         signInWithPopup(auth, facebook)
//         .then(user => {
//             console.log(user);
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
// }

export const loginSync = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id, displayname
        }
    }
}

export const logoutAsync = () => {
    return( dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSync())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSync = () => {
   return{
       type: types.logout,
       payload: {}
   }
}