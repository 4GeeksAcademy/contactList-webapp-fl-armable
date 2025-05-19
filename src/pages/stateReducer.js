export const initialState = "Edit";

export default function stateReducer (state, action) {
    switch(action.type) {
        case "View all":
            return;
        case "View one":
            return;
        case "Edit":
            return;
        case "Add":
            return;
        case "Delete":
            return;
        default:
            throw new Error(`Acción desconocida: ${action.type}`);
    }
};