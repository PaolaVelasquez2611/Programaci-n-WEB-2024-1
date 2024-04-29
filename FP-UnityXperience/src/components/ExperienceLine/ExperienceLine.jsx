import { experienceMock } from "../../data/experienceMock"
import calendarIcon from '../../assets/SVG/calendar.svg'
import './ExperienceLine.css'

export const ExperienceLine = () => {

    const experience = experienceMock
    console.log(experience)

  return (
    <section>
        <h2>Experience</h2> {/* TODO: add gradient style */}
        <article className="article-container px-2 mt-10">
            <ul className="relative border-l -border--blue-cian/50">
                {experience.map(({ id, job, company, time, description })=>(
                    <li className="mb-8 md:mb-6 ml-8 " key={id}>
                        <span className="span-calendar-icon">
                            <img className="calendar-icon w-5 h-5" src={calendarIcon} />
                        </span>
                        <h3 className="flex flex-row align-middle job-charge">{job}
                            <span className="dash"><strong> - </strong></span>
                            <span className="company-text">{company}</span>
                        </h3>
                        <time className="time-text">{time}</time>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </article>
    </section>
  )
}

