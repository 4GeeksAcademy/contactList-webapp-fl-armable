// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
import stateReducer, { initialState } from "../pages/stateReducer.js";  // Import the reducer and the initial state.

// Create a context to hold the global state of the application
// We will call this global state the "state" to avoid confusion while using local states
const StateContext = createContext()

// Define a provider component that encapsulates the state and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StateProvider({ children }) {
    // Initialize reducer with the initial state.
    const [state, dispatch] = useReducer(stateReducer, initialState)
    // Provide the state and dispatch method to all child components.
    return <StateContext.Provider value={{ state, dispatch }}>
        {children}
    </StateContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, state } = useContext(StateContext)
    return { dispatch, state };
}