import Card from './Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDrivers,
  setCurrentPage,
  orderCards,
  onSearch,
  getTeams,
  filterByTeam,
  filterByOrigin,
} from '../redux/actions';
import styles from '../Css/Home.module.css';

export default function Home() {
  let auxForTeams;
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.drivers);
  const teams = useSelector(state => state.teams);
  const allDrivers = useSelector(state => state.allDrivers);
  let teamsArray = [];
  const currentPage = useSelector(state => state.currentPage);
  const pageSize = 9;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedDrivers = drivers[0]?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(drivers[0]?.length / pageSize);

  useEffect(() => {
    if (!drivers[0]) {
      dispatch(getDrivers());
      dispatch(getTeams());
      setCurrentPage(1);
    }
  }, [drivers]);

  // console.log(drivers);

  const handleOrder = e => {
    if (e.target.value === 'S') {
      dispatch(onSearch(''));
    } else {
      dispatch(orderCards(e.target.value, drivers[0]));
    }
  };

  const handleTeamFilter = e => {
    dispatch(setCurrentPage(1));
    dispatch(filterByTeam(e.target.value, allDrivers[0]));
  };

  const handleOriginFilter = e => {
    dispatch(filterByOrigin(e.target.value, allDrivers[0]));
  };

  const mapeado = paginatedDrivers?.map(
    e => (
      (auxForTeams = e?.Teams?.slice(team => team.nombre)),
      auxForTeams ? (teamsArray = auxForTeams?.map(e => e.nombre)) : '',
      (
        <Card
          key={e.id}
          id={e.id}
          image={e.image?.url ? e.image.url : e.image}
          name={e.name.forename ? e.name.forename : e.name}
          teamsAPI={e.teams}
          teamsDB={teamsArray.toString()}
        />
      )
    )
  );

  if (!paginatedDrivers) {
    return (
      <div className={styles.loading}>
        <img
          src='https://i.gifer.com/ZZ5H.gif'
          alt='loading'
          height={40}
          width={40}
        />
      </div>
    );
  }

  if (paginatedDrivers.length === 0) {
    return (
      <div>
        <span className={styles.noResults}>No se encontraron resultados</span>
        <div className={styles.statusNotFound}>
          <span className={styles.four}>4</span>
          <span className={styles.zero}>0</span>
          <span className={styles.four}>4</span>
        </div>
        <div className={styles.reset}>
          <button onClick={() => dispatch(onSearch(''))}>Reset</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.selectBoxWrapper}>
        <select className={styles.selectBox} onChange={handleOrder}>
          <option value='S'>Sin Orden</option>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
          <option value='N'>Fecha de nacimiento</option>
        </select>
        <span>Filtrar por</span>
        <select className={styles.selectBox} onChange={handleTeamFilter}>
          <option value='S'>Team</option>
          {teams?.map(team => (
            <option key={team.id} value={team}>
              {team}
            </option>
          ))}
        </select>
        <select className={styles.selectBox} onChange={handleOriginFilter}>
          <option value='S'>Origin</option>
          <option value='DB'>DB</option>
          <option value='API'>API</option>
        </select>
      </div>

      <div className={styles.container}>{mapeado}</div>
      <div>
        <div className={styles.pagination}>
          <button
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 1}
          >
            Back
          </button>
          <span className={styles.pages}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
