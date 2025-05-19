import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export default function Header() {
    const { state, dispatch } = useGlobalReducer();  // Access the global state using the custom hook

    const handleButton = () => {
        if (state === "View all") {
            dispatch({ type: "Add" });
        } else {
            dispatch({ type: "View all" });
        }
    };

    return (
        <>
            <h1>{state}</h1>
            <button onClick={handleButton}>{state === "View all" ? "Add new contact" : "Go back"}</button>
        </>
    );
}