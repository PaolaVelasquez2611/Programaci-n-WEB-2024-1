import './EditButton.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const EditButton = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addproject');
  };

  if (!user) {
    return null;
  }

  return (
    <section>
      <button className="edit-button" onClick={handleClick}>
        <img className="pencil-img" src="../../src/assets/SVG/pencil-button.svg" alt="Edit" />
      </button>
    </section>
  );
};