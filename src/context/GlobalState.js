import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


// //Initial state
// const initialState = {
//     users: [
//         {user_id: 1, user_name: 'aubrey', user_email: 'aubreylanelv@gmail.com'},
//         {user_id: 2, user_name: 'melanie', user_email: 'meliemel@gmail.com'},
//         {user_id: 3, user_name: 'celeste', user_email: 'celestealbeing@gmail.com'},
//     ]
//     }
let users = [];

//create context
export const GlobalContext = createContext(users);
//provider component
export const GlobalProvider = ({ children, users }) => {
    const [state, dispatch] = useReducer(AppReducer, users);
    users = {users}
    function deleteUser(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addUser(newUser) {
        dispatch({
            type: 'ADD_USER',
            payload: newUser
        });
    }

    return (<GlobalContext.Provider value={{users: state.users, deleteUser, addUser}}>
        {children}
    </GlobalContext.Provider>);
}