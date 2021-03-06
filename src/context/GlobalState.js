import React, { createContext, useReducer } from 'react';

//importing App reducer
import AppReducer from './AppReducer'

//initial State

const initialState = {
    transactions: []
};

//create context  initialState
export const GlobalContext = createContext(initialState);

//provider bnarhe hain yahin pe

export const GlobalProvider = ({ children }) => {

    let [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>

            {children}

        </GlobalContext.Provider>
    )
}
