import './repo.css';

function Repo({ lang, name, desc, forks_count, onClick }) {
  console.log(onClick);
  return (
    <tr>
      <td>{name}</td>
      <td>{desc}</td>
      <td>
        <button onClick={onClick}>{lang}</button>
      </td>
      <td>{forks_count}</td>
    </tr>
  );
}

export default Repo;
