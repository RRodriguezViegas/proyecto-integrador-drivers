import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTeams, postDriver, getDrivers } from "../redux/actions";
import validate from "../utils/validate";
import styles from "../Css/CreateDriver.module.css";

const CreateDriver = () => {
  const teams = useSelector(state => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
    setErrors({ nationality: "." });
  }, []);

  let allTeams = [];
  const [image, setImage] = useState("");
  const [driverData, setDriverData] = useState({
    name: "",
    surname: "",
    image: "",
    nationality: "",
    dob: "",
    teams: [],
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    if (e.target.name === "teams") {
      const selectedTeam = e.target.value;
      if (driverData.teams.includes(selectedTeam)) {
        return;
      }
      const updatedTeams = [...driverData.teams, selectedTeam];
      setDriverData({
        ...driverData,
        teams: updatedTeams,
      });
    } else if (e.target.type === "file") {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    } else {
      setDriverData({
        ...driverData,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(validate({ ...driverData, [e.target.name]: e.target.value }));
    // console.log(driverData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      driverData.name = (
        driverData.name[0].toUpperCase() + driverData.name.slice(1)
      ).trim();
      driverData.surname = (
        driverData.surname[0].toUpperCase() + driverData.surname.slice(1)
      ).trim();
      driverData.nationality =
        driverData.nationality[0].toUpperCase() +
        driverData.nationality.slice(1).trim();

      const driverDataForm = new FormData();
      driverDataForm.append("name", driverData.name);
      driverDataForm.append("surname", driverData.surname);
      driverDataForm.append("image", image);
      driverDataForm.append("nationality", driverData.nationality);
      driverDataForm.append("dob", driverData.dob);
      driverDataForm.append("teams", driverData.teams);
      driverDataForm.append("description", driverData.description);

      console.log(driverDataForm);

      await dispatch(postDriver(driverDataForm));
      await dispatch(getTeams());
      await dispatch(getDrivers());
      alert("Driver created successfully");
      // window.location.reload(false);
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
      <div className={styles.form}>
        <form>
          <input
            type='text'
            name='name'
            value={driverData.name}
            placeholder='Name'
            onChange={handleChange}
            className={errors.name ? styles.error : styles.inputs}
          />
          <input
            type='text'
            name='surname'
            value={driverData.surname}
            placeholder='Last Name'
            onChange={handleChange}
            className={errors.surname ? styles.error : styles.inputs}
          />
          <input
            type='file'
            placeholder='Image URL'
            onChange={handleChange}
            className={styles.inputs}
          />
          <input
            type='text'
            name='nationality'
            value={driverData.nationality}
            placeholder='Nationality'
            onChange={handleChange}
            className={errors.nationality ? styles.error : styles.inputs}
          />
          <input
            type='date'
            name='dob'
            value={driverData.dob}
            placeholder='Birth Date'
            onChange={handleChange}
            className={errors.dob ? styles.error : styles.inputs}
          />
          <select
            name='teams'
            value={driverData.teams}
            onChange={handleChange}
            className={styles.inputs}
          >
            <option value={""}>No team</option>
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
            placeholder='Description'
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
    </div>
  );
};

export default CreateDriver;
