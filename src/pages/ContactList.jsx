import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { Card } from "../components/Card";  // Importing the Card component to display contact information.

export const ContactList = ({shareUser}) => {
    const { state, dispatch } = useGlobalReducer();  // Destructure state and dispatch from the custom hook.

    const contact = {
    name: "Bob",
    phone: "555-555-5555",
    email: "bob@mail.com",
    address: "Av. 123",
    id: 0
    }

    return (
        <Card contactToCard = {contact}/>
    );
};