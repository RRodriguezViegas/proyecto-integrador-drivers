import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDriversById, cleanDetail } from '../redux/actions';

export default function Detail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const driverDetail = useSelector(state => state.driverDetail);

  useEffect(() => {
    dispatch(getDriversById(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  console.log(driverDetail);

  return (
    <div>
      <h3>{driverDetail?.id}</h3>
      <h1>
        {driverDetail?.name?.forename
          ? driverDetail?.name.forename
          : driverDetail?.name}
      </h1>
      <h1>{driverDetail?.name?.surname}</h1>
      <h2>{driverDetail?.nationality}</h2>
      <img
        src={
          driverDetail?.image?.url
            ? driverDetail?.image.url
            : driverDetail?.image
        }
        alt={
          driverDetail?.image?.url
            ? driverDetail?.image.url
            : driverDetail?.image
        }
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
    </div>
  );
}
