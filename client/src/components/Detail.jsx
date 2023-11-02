import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDriversById,
  cleanDetail,
  deleteDriver,
  onSearch,
} from '../redux/actions';
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

  const handleDelete = async () => {
    await dispatch(deleteDriver(id));
    await dispatch(onSearch(''));
    alert('Driver deleted successfully');
    dispatch(cleanDetail());
    navigate('/drivers');
  };

  img = !driverDetail?.image?.url
    ? driverDetail?.image
    : driverDetail?.image.url;

  return (
    <div className={styles.bigOlContainer}>
      <div className={styles.detail}>
        <div className={styles.detailLeft}>
          <p className={styles.id}>{driverDetail?.id}</p>
          <img
            src={!img || typeof img === 'object' ? defaultImage : img}
            alt='driver image'
            height='200px'
            width='200px'
          />
          <h1 className={styles.nameLeft}>
            {driverDetail?.name?.forename
              ? driverDetail?.name.forename
              : driverDetail?.name}
          </h1>
          <div className={styles.buttons}>
            <button
              onClick={() => navigate('/drivers')}
              className={styles.back}
            >
              Go back
            </button>
            <button
              onClick={() => {
                handleDelete();
              }}
              disabled={typeof driverDetail.id === 'number'}
              className={styles.delete}
            >
              Delete
            </button>
          </div>
        </div>

        <div className={styles.detailRight}>
          <span className={styles.label}>Name</span>
          <p>
            {driverDetail?.name?.forename
              ? driverDetail?.name.forename
              : driverDetail?.name}
          </p>

          <span className={styles.label}>Surname</span>
          <p>
            {driverDetail?.name?.surname
              ? driverDetail?.name.surname
              : driverDetail?.surname}
          </p>

          <span className={styles.label}>Nationality</span>
          <p>{driverDetail?.nationality}</p>

          <span className={styles.label}>Description</span>
          <p className={styles.description}>{driverDetail?.description}</p>

          <span className={styles.label}>Date of birth</span>
          <p>{driverDetail?.dob}</p>

          <span className={styles.label}>Teams</span>
          <div>
            {driverDetail?.Teams?.map(team => (
              <p key={team.id}>{team.nombre}</p>
            ))}
          </div>
          <p>{driverDetail?.teams}</p>
        </div>
      </div>
    </div>
  );
}
