import Card from './Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../redux/actions';

export default function Home() {
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.drivers);

  useEffect(() => {
    if (!drivers[0]) {
      dispatch(getDrivers());
    }
    console.log(drivers);
  }, []);

  const mapeado = drivers[0]?.map(e => (
    <Card
      key={e.id}
      id={e.id}
      image={e.image?.url ? e.image.url : e.image}
      name={e.name.forename ? e.name.forename : e.name}
      teamsAPI={e.teams}
      teamsDB={e?.Teams?.map(team => (
        <p key={team.id}>{team.nombre}</p>
      ))}
    />
  ));

  return <div>{mapeado}</div>;
}
