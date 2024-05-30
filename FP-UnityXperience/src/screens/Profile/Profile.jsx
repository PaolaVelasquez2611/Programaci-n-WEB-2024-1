import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { teamInformation } from "../../data/teamInformation";
import { ExperienceLine, ProfileCard, GradientHeading, CardSlider, Background } from "../../components";

export const Profile = () => {
  const { Author } = useParams();
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const localProjects = JSON.parse(localStorage.getItem('projects'));
    setProjects(localProjects);
  }, []);

  useEffect(() => {
    const profileData = teamInformation.find(member => member.author_id === Author);
    setProfile(profileData);
  }, [Author]);

  if (!profile) {
    return <p>Loading...</p>; 
  }

  return (
    <>
      <Background />
      <h1 className="text-center mt-20 mb-20 mx-auto font-bold">UniteXperience Profile</h1>
      <ProfileCard
        imagen={profile.pic}
        title={profile.name}
        text={profile.description}
        socialMedia={profile.social_media} 
      />
      <GradientHeading text="My Experience" />
      <ExperienceLine experiences={profile.experience} />
      <GradientHeading text="My Projects" />
      <CardSlider author={profile.author_name} />
    </>
  );
};
