import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../Css/Card.module.css';

const defaultImage =
  'https://static.vecteezy.com/system/resources/previews/004/511/281/non_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg';

export default function Card({ id, name, teamsAPI, teamsDB, image }) {
  return (
    <Link to={`/detail/${id}`} className={styles.card}>
      <img
        src={!image || typeof image === 'object' ? defaultImage : image}
        alt={image}
        height='200px'
        width='200px'
      />
      <h2>{name}</h2>
      <p>{teamsAPI ? teamsAPI : teamsDB.toString()}</p>
      {/* <p>{teamsDB}</p> */}
    </Link>
  );
}
