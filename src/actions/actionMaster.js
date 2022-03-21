import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesMaster } from "../types/types";

// Borrar
export const deleteAsync = (name) => {
    return async(dispatch) => {
        const masterCollection = collection(db, "pokemon_master");
        const q = query(masterCollection, where("name","==", name));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((name) => {
            console.log(name.id);
            deleteDoc(doc(db,"pokemon_master", name.id))
            .then(resp => {
                dispatch(deleteSync(name))
                console.log(resp);
            })
            .catch(error => {
                console.log(error.message);
            })
        });
    }
}

export const deleteSync = (name) => {
    return {
        type: typesMaster.delete,
        payload: name
    }
}

// listar
export const listMasterAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "pokemon_master"));
        const master = [];
        querySnapshot.forEach((doc) => {
            master.push({
                ...doc.data()
            })
        });
        dispatch(listMasterSync(master));
    }
}

export const listMasterSync = (masters) => {
    return {
        type: typesMaster.list,
        payload: masters
    }
}

// registrar
export const registerMasterAsync = (name, age, type, image) => {
    console.log(name);
    return async (dispatch) => {
        const newMaster = {
            name, age, type, image
        }
        await addDoc(collection(db, "pokemon_master"), newMaster)
            .then(resp => {
                dispatch(registerMasterSync(newMaster))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registerMasterSync = (master) => {
    return {
        type: typesMaster.register,
        payload: master
    }
}