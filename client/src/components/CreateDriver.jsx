import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTeams, postDriver, getDrivers } from '../redux/actions';
import validate from '../utils/validate';

const CreateDriver = () => {
  const teams = useSelector(state => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const [driverData, setDriverData] = useState({
    name: '',
    surname: '',
    image: '',
    nationality: '',
    dob: '',
    teams: 'Sin equipo',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    if (e.target.name === 'teams') {
      setDriverData({
        ...driverData,
        [e.target.name]: [e.target.value],
      });
    } else {
      setDriverData({
        ...driverData,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(validate({ ...driverData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      await dispatch(postDriver(driverData));
      console.log(driverData);
      dispatch(getTeams());
    }
  };

  return (
    <div>
      <form>
        <input
          type='text'
          name='name'
          value={driverData.name}
          placeholder='Nombre'
          onChange={handleChange}
        />

        <input
          type='text'
          name='surname'
          value={driverData.surname}
          placeholder='Apellido'
          onChange={handleChange}
        />
        <input
          type='text'
          name='image'
          value={driverData.image}
          placeholder='URL de Imagen'
          onChange={handleChange}
        />
        <input
          type='text'
          name='nationality'
          value={driverData.nationality}
          placeholder='Nacionalidad'
          onChange={handleChange}
        />
        <input
          type='date'
          name='dob'
          value={driverData.dob}
          placeholder='Fecha de nacimiento'
          onChange={handleChange}
        />
        <select name='teams' value={driverData.teams} onChange={handleChange}>
          <option value=''>Sin equipo</option>
          {teams?.map(team => (
            <option key={team.id} value={team} onChange={handleChange}>
              {team}
            </option>
          ))}
        </select>
        {driverData.teams.map(team => (
          <div key={team} name='teams'>
            {team}
          </div>
        ))}
        <input
          type='text'
          name='description'
          value={driverData.description}
          placeholder='Descripción'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateDriver;
