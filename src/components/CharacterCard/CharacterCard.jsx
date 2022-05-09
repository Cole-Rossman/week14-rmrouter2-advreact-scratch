import { Link } from 'react-router-dom';
import cardStyle from './CharacterCard.css';

export default function CharacterCard({ id, image, name, species, status, hide }) {
  
  return (
    <article key={id} className={cardStyle.card}>
      <img alt={`Image of ${name}`} src={image} />
      {!hide &&
      <Link to={`/character/${id}`}>
        <h3>{name}</h3>
      </Link>
      }
      {hide &&
      <h3>{name}</h3>
      }
      <h4>Species: {species}</h4>
      <h5>Status: {status}</h5>
    </article>
  );
}
