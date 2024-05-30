import { Button } from "../Button/Button";
import { SocialButtons } from "../SocialButtons/SocialButtons";
import './PartnerCard.css';

export const PartnerCard = ({ person }) => {
  return (
    <div className="partner-card-container">
      <img 
        src={person.pic} alt={`${person.name} profile`} 
        className="partner-image" />
      <div className="content-card">
        <h2 className="name">{person.name}</h2>
        <p className="partner-info">{person.rol}</p>
        <h3>{person.tools.join(' | ')}</h3>
        <Button
          className="btn-partner-card"
          text="See more"
          path={`/profile/${person.author_id}`}
        />
        <hr className="socials" />
        <SocialButtons />
      </div>
    </div>
  );
};
