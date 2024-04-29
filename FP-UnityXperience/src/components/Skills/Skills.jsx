import { skills } from "../../data/skills";
import './Skills.css';

export const Skills = () => {
    const skillsData = skills;

    return (
        <section>
            <ul className="grid grid-cols-3 gap-4 relative md:grid-cols-5 lg:grid-cols-8 w-full transition-all ">
                {skillsData.map(({ name, logo, id, back }) => (
                    <li key={id} className='flex items-center justify-center m-2 p-3 rounded-xl backdrop-blur w-16 h-16 skill-item' 
                    style={{ backgroundColor: `${back}30` }}>
                        <img src={logo} alt={name} className="" />
                        <span className="skill-span"  
                        style={{ borderColor: back, color: back }}>
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};