import Button from 'react-bootstrap/Button';
import './repo.css';

function Repo({ lang, name, desc, forks_count, date }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>
        <Button variant="primary">{lang}</Button>
      </td>
      <td>{forks_count}</td>
    </tr>
  );
}

export default Repo;
