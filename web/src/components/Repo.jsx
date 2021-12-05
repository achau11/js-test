import './repo.css';

function Repo({ lang, name, desc, forks_count }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{lang}</td>
      <td>{forks_count}</td>
    </tr>
  );
}

export default Repo;
