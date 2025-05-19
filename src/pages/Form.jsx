import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";

export const Form = ({shareUser}) => {
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        id: null
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el objeto contact, por ejemplo enviarlo a un backend o mostrarlo en consola
        console.log(contact);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={contact.name} onChange={handleChange} />
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" id="phone" name="phone" value={contact.phone} onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={contact.email} onChange={handleChange} />
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" value={contact.address} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};