import { GetProjectsContext } from "./GetProjectsContext"
import { app } from "../../services/firebase-config"
import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";

const db = getFirestore(app)

export const GetProjectsContextProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [projects, setProjects] = useState([]);
  
    const getProjectsFromFirestore = () => {
      const q = query(collection(db, "projects"));
      onSnapshot(q, (querySnapshot) => {
        const updatedProjects = [];
        querySnapshot.forEach((doc) => {
          updatedProjects.push(doc.data());
        });
        setProjects(updatedProjects);
  
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
      });
    };
  
    const getProjects = () => {
      const localProjects = JSON.parse(localStorage.getItem('projects'));
      if (localProjects && localProjects.length > 0) {
        setProjects(localProjects);
      }
  
      getProjectsFromFirestore();
    };
  
    useEffect(() => {
      getProjects();
    }, []);
  
    const handleFilterChange = (filter) => {
      setSelectedFilter(filter);
    };
  
    const filteredProjects = projects.filter(project => {
      const matchSearchTerm = 
        (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) ||
        (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase().trim())) ||
        (project.tags && project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase().trim())));
  
        const matchFilter = selectedFilter === 'All' || 
        (project.tags && project.tags.some(tag => tag.toLowerCase() === selectedFilter.toLowerCase()));
  
      return matchSearchTerm && matchFilter;
    });

    return(
        <GetProjectsContext.Provider value={{
            searchTerm, 
            setSearchTerm, 
            selectedFilter, 
            setSelectedFilter, 
            filteredProjects,
            projects
        }}>
            { children }
        </GetProjectsContext.Provider>
    )
}