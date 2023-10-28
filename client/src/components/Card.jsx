import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const defaultImage = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

export default function Card({ id, name, teamsAPI, teamsDB, image }) {
  return (
    <Link to={`/detail/${id}`}>
      <img
        src={!image ? defaultImage : image}
        alt={image}
        height='200px'
        width='200px'
      />
      <h2>{name}</h2>
      <h2>{teamsAPI}</h2>
      <h2>{teamsDB}</h2>
    </Link>
  );
}
