import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const { id } = useParams();
  const hideLink = true;

  useEffect(() => {
  try {
    const fetchData = async () => {
      setLoading(true);
      const characterData = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await characterData.json();
      setCharacter(data);
      setLoading(false);
    }
    fetchData();
  } catch (e) {
      setError(e.message);
  }
  }, []);

  return (
    loading ? <h1>Loading...</h1> :
    <>
    {error && <p>{error}</p>}
    <h1>Character Detail Page</h1>
    <Link to="/">
        <button>
            Back to character list
        </button>
    </Link>
    <CharacterCard {...character} hide={hideLink} />
    </>
  )
}
