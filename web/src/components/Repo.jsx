import './repo.css';

function Repo({
  index,
  lang,
  name,
  desc,
  forks_count,
  buttonClick,
  repoClick,
}) {
  return (
    <tr
      onClick={(e) => {
        repoClick(e, index);
      }}
    >
      <td>{name}</td>
      <td>{desc}</td>
      <td>
        <button onClick={buttonClick}>{lang}</button>
      </td>
      <td>{forks_count}</td>
    </tr>
  );
}

export default Repo;
