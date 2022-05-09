import { useEffect, useState } from 'react';
import mainStyle from './Main.css';
import { useHistory, useLocation } from 'react-router-dom';


export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const history = useHistory();
  const location = useLocation();

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
  }, []);
  return (
    <div>Main</div>
  )
}
