import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDriversById, cleanDetail, deleteDriver } from '../redux/actions';
import styles from '../Css/Detail.module.css';

export default function Detail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const driverDetail = useSelector(state => state.driverDetail);
  let img;
  const defaultImage =
    'https://static.vecteezy.com/system/resources/previews/004/511/281/non_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg';

  useEffect(() => {
    dispatch(getDriversById(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  const handleDelete = () => {
    dispatch(deleteDriver(id));
    dispatch(cleanDetail());
    navigate('/drivers');
  };

  img = !driverDetail?.image?.url
    ? driverDetail?.image
    : driverDetail?.image.url;

  return (
    <div className={styles.detail}>
      <h3>{driverDetail?.id}</h3>
      <h1>
        {driverDetail?.name?.forename
          ? driverDetail?.name.forename
          : driverDetail?.name}
      </h1>
      <h1>{driverDetail?.name?.surname}</h1>
      <h2>{driverDetail?.nationality}</h2>
      {typeof driverDetail?.image === 'object' ? '' : ''}
      <img
        src={!img || typeof img === 'object' ? defaultImage : img}
        alt='driver image'
        height='200px'
        width='200px'
      />
      <p>{driverDetail?.description}</p>
      <h2>{driverDetail?.dob}</h2>
      <h2>
        {driverDetail?.Teams?.map(team => (
          <p key={team.id}>{team.nombre}</p>
        ))}
      </h2>
      <h2>{driverDetail?.teams}</h2>

      <button
        onClick={() => {
          handleDelete;
        }}
      >
        Delete
      </button>
    </div>
  );
}
