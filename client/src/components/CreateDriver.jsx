import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTeams, postDriver, getDrivers } from '../redux/actions';
import validate from '../utils/validate';
import { useNavigate } from 'react-router-dom';
import styles from '../Css/CreateDriver.module.css';

const CreateDriver = () => {
  const teams = useSelector(state => state.teams);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTeams());
    setErrors({ nationality: '.' });
  }, []);

  let allTeams = [];
  const [driverData, setDriverData] = useState({
    name: '',
    surname: '',
    image: '',
    nationality: '',
    dob: '',
    teams: [],
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    if (e.target.name === 'teams') {
      const selectedTeam = e.target.value;
      if (driverData.teams.includes(selectedTeam)) {
        return;
      }
      const updatedTeams = [...driverData.teams, selectedTeam];
      setDriverData({
        ...driverData,
        teams: updatedTeams,
      });
    } else {
      setDriverData({
        ...driverData,
        [e.target.name]: e.target.value,
      });
    }
    console.log('driverData', driverData);
    console.log('allTeams', allTeams);
    setErrors(validate({ ...driverData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      await dispatch(postDriver(driverData));
      dispatch(getTeams());
      await dispatch(getDrivers());
      alert('Driver created successfully');
      // navigate('/drivers');
    }
  };

  const handleRemove = team => {
    const updatedTeams = driverData.teams.filter(t => t !== team);
    setDriverData({
      ...driverData,
      teams: updatedTeams,
    });
  };

  return (
    <div className={styles.createDriver}>
      <h1>Create Driver</h1>
      <form>
        <input
          type='text'
          name='name'
          value={driverData.name}
          placeholder='Nombre'
          onChange={handleChange}
          className={errors.name ? styles.error : styles.inputs}
        />
        <input
          type='text'
          name='surname'
          value={driverData.surname}
          placeholder='Apellido'
          onChange={handleChange}
          className={errors.surname ? styles.error : styles.inputs}
        />
        <input
          type='text'
          name='image'
          value={driverData.image}
          placeholder='URL de Imagen'
          onChange={handleChange}
          className={styles.inputs}
        />
        <input
          type='text'
          name='nationality'
          value={driverData.nationality}
          placeholder='Nacionalidad'
          onChange={handleChange}
          className={styles.inputs}
        />
        <input
          type='date'
          name='dob'
          value={driverData.dob}
          placeholder='Fecha de nacimiento'
          onChange={handleChange}
          className={styles.inputs}
        />
        <select
          name='teams'
          value={driverData.teams}
          onChange={handleChange}
          className={styles.inputs}
        >
          <option value={''}>Sin equipo</option>
          {teams?.map(team => (
            <option key={team.id} value={team} onChange={handleChange}>
              {team}
            </option>
          ))}
        </select>
        <input
          type='text'
          name='description'
          value={driverData.description}
          placeholder='Descripción'
          onChange={handleChange}
          className={styles.inputs}
        />
        <div className={styles.selectedteamsgrid}>
          {driverData.teams.map(team => (
            <div className={styles.selectedteams}>
              <p>{team}</p>
              <button
                type='button'
                onClick={() => handleRemove(team)}
                className='teamButton'
              >
                x
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={Object.keys(errors).length > 0}
          className='submitButton'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDriver;
