import { Outlet } from "react-router-dom/dist"
import { ContactList } from "./pages/ContactList"
import { Form } from "./pages/Form";
import Header from "./components/Header";
import { useState } from "react";
import useGlobalReducer from "./hooks/useGlobalReducer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Login = () => {
    const [userIn, setUserIn] = useState("");
    const { state } = useGlobalReducer();  // Access the global state using the custom hook

    const postToDo = async (input) => {
		const response = await fetch("https://playground.4geeks.com/todo/users/" + input, {
			method: "POST",
		});
		let dataJson = await response.json();
		console.log(dataJson);
		if(dataJson.detail === "User already exists." || dataJson.name === input )
		setUserIn(input);
	}

    return (
        <>
            <Header/>
        	<div className="box">
                { userIn.length > 0 ?
                    ( 	<>
                            <span>Usuario:&nbsp;<strong>{userIn}</strong>  </span>
                            <button onClick={ () => setUserIn("")}>Salir</button>
                    </>	) :
                    <input id = "userIn" type = "text" placeholder = "Introduce un usuario"
                    onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim() !== '') {
                                postToDo(e.target.value.trim());
                                e.target.value = '';
                }}}
                    />
                }
		    </div>
            {userIn.length > 0 && ((state === "Edit" || state === "Add")? <Form shareUser = {userIn}/> : <ContactList shareUser = {userIn}/>) }
            <Outlet />
        </>
    )
}