import { useEffect, useState } from 'react';
import mainStyle from './Main.css';
import { useHistory, useLocation } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterFilter from '../../components/CharacterFilter/CharacterFilter';



export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status') ?? 'all';

  const handleStatusChange = (event) => {
    history.push(`/?status=${event.target.value}`);
  };

  useEffect(() => {
  try {
    const fetchData = async () => {
        setLoading(true);
        const statusParam = new URLSearchParams(location.search).get('status');
        const url =
        statusParam === 'all' || !statusParam
        ? 'https://rickandmortyapi.com/api/character'
        : `https://rickandmortyapi.com/api/character?status=${statusParam}`;
        const res = await fetch(url);
        const { results } = await res.json();
        setCharacters(results);
        setLoading(false);
    }
    fetchData();
  } catch (e) {
      setError(e.message);
  }
  }, [location.search]);
  return (
    loading ? <h1>Loading...</h1> :
    <div className={mainStyle.main}>
        {error && <p>{error}</p>}
        <h1>Rick and Morty Character List:</h1>
        <CharacterFilter statusValue={status} onStatusChange={handleStatusChange} />
        <ul className={mainStyle.list}>
            {/* always check for whether to use implicit or explicit return */}
            {characters.map((character) => {
               return <CharacterCard key={character.id} {...character} />
            })}
        </ul>
    </div>
  )
}
