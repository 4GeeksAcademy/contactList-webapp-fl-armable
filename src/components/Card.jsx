import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({contactToCard}) => {
    const { dispatch } = useGlobalReducer();  // Access the global state using the custom hook
    
    const handleAction = (id, action) => {
        dispatch({ type: action, payload: id });
    };
    return (
        <div className="card-container">
            <div className="card-avatar">
                <h1 style={{ margin: 0 }}>👤</h1>
            </div>
            <div className="card-info">
                <h3>{contactToCard.name}</h3>
                <p>☎ {contactToCard.phone}</p>
                <p>✉ {contactToCard.email}</p>
                <p>🏠︎ {contactToCard.address}</p>
            </div>
            <div className="card-actions">
                <button onClick={() => handleAction(contactToCard.id, 'View one')}>🔍︎</button>
                <button onClick={() => handleAction(contactToCard.id, 'Edit')}>✎</button>
                <button onClick={() => handleAction(contactToCard.id, 'Delete')}>🗑</button>
            </div>
        </div>
    );
};