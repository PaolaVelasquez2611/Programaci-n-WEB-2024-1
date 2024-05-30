import { TeamSlider } from "../TeamSlider/TeamSlider";
import { teamInformation } from "../../data/teamInformation";

export const TeamSection = () => {
  return (
    <div className="team-section">
      <TeamSlider items={teamInformation} />
    </div>
  );
};
