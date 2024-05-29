import './Projects.css';
import { ProjectCards, SearchBar, EditButton } from "../../components";
import { Background } from '../../components/Background/Background';
import { useGetProjects } from '../../hooks/useGetProjects';

export const Projects = () => {

  const { 
    searchTerm, 
    setSearchTerm, 
    selectedFilter, 
    setSelectedFilter, 
    filteredProjects } = useGetProjects();

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <Background></Background>
      <section className="filter-projects">
        <SearchBar 
          type="text" 
          placeholder="Search a project" 
          value={searchTerm} 
          onChange={(search) => setSearchTerm(search.target.value)}
          onFilterChange={handleFilterChange}
        />
      </section>
      <h1 className="title-screen">UnityXperience Projects</h1>
      <ProjectCards filteredData={filteredProjects} />
      <EditButton/>
    </>
  );
};