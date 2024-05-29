import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
        throw new Error ('The AuthContext is not working')
    }
    return{
        ...context
    }
}