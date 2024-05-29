import { useContext } from 'react';
import { AddProjectContext } from '../contexts/AddProject/AddProjectContext';

export const useAddProject = () => {
    const context = useContext(AddProjectContext);

    if (!context) {
        throw new Error ('This context is not working')
    }
    return{
        ...context
    }
};
