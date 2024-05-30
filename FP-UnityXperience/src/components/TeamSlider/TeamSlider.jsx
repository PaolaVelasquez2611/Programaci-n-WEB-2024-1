import React, { useState } from 'react';
import { PartnerCard } from "../PartnerCard/PartnerCard";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import './TeamSlider.css';

const MAX_VISIBILITY = 3;

export const TeamSlider = ({ items }) => {
  const [active, setActive] = useState(2);
  const count = items.length;

  return (
    <div className="carousel-container">
      <div className="carousel">
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
        <ul className="carousel-partner">
          {items.map((person, i) => (
            <li 
              className='card-container' 
              style={{
                '--active': i === active ? 1 : 0,
                '--offset': (active - i) / 3,
                '--direction': Math.sign(active - i),
                '--abs-offset': Math.abs(active - i) / 3,
                'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
              }} 
              key={person.author_id}
            >
              <PartnerCard person={person} />
            </li>
          ))}
        </ul>
        {active < count - 1 && 
          <button 
            className='nav right' 
            onClick={() => setActive(i => i + 1)}>
              <TiChevronRightOutline />
          </button>}
      </div>
    </div>
  );
};
