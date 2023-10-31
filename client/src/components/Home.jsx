import Card from './Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, setCurrentPage, orderCards } from '../redux/actions';
import styles from '../Css/Home.module.css';

export default function Home() {
  let auxForTeams;
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.drivers);
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
      setCurrentPage(1);
    }
  }, [drivers]);

  const handleOrder = e => {
    dispatch(orderCards(e.target.value, drivers[0]));
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

  https: if (!paginatedDrivers) {
    return (
      <div>
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
    return <span>No se encontraron resultados</span>;
  }

  return (
    <div>
      <select className={styles.selectBox} onChange={handleOrder}>
        <option value='S'>Sin Orden</option>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
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
