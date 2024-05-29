import { useContext } from "react";
import { GetProjectsContext } from "../contexts/GetProjects/GetProjectsContext";

export const useGetProjects = () => {
    const context = useContext(GetProjectsContext);
  
    if (!context) {
        throw new Error ('The GetProjectsContext is not working')
    }
    return{
        ...context
    }
  }