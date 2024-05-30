import { useEffect, useState } from "react";
import calendarIcon from '../../assets/SVG/calendar.svg';
import './ExperienceLine.css';

export const ExperienceLine = ({ experiences }) => {
  const [userExperiences, setUserExperiences] = useState([]);

  useEffect(() => {
    if (experiences && experiences.length > 0) {
      setUserExperiences(experiences);
    } 
  }, [experiences]);

  return (
    <section>
      <article className="article-container px-20 mt-10">
        <ul className="relative border-l -border--blue-cian/50">
          {userExperiences.map(({ id, job, company, time, job_description }) => (
            <li className="mb-8 md:mb-6 ml-8 " key={id}>
              <span className="span-calendar-icon">
                <img className="calendar-icon w-5 h-5" src={calendarIcon} alt="Calendar" />
              </span>
              <h3 className="flex flex-row align-middle job-charge">
                {job}
                <span className="dash"><strong> - </strong></span>
                <span className="company-text">{company}</span>
              </h3>
              <time className="time-text">{time}</time>
              <p>{job_description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
