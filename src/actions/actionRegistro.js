import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { types } from '../types/types';


export const registerAsync = (email, password, name, lastname) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {
            console.log(user);
            await updateProfile(auth.currentUser, {displayName: name})
            dispatch(registerSync(email, password, name, lastname))
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const registerSync = (email, password, name) => {
    return {
        type: types.registro,
        payload: {
            email,
            password,
            name
        }
    }
}