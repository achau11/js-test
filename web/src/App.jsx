import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Repo from './components/Repo';
import { Table } from 'react-bootstrap';

export function App() {
  const [state, setState] = useState([]);
  //API call
  useEffect(() => {
    axios.get('http://localhost:4000/repos').then((res) => setState(res.data));
  }, []);

  const repos = state
    .sort((a, b) => {
      console.log(a.created_at, b.created_at);
      return new Date(b.created_at) - new Date(a.created_at);
    })
    .map((repo) => {
      return (
        <Repo
          key={repo.id}
          lang={repo.language}
          name={repo.name}
          desc={repo.description}
          forks_count={repo.forks_count}
        />
      );
    });

  console.log(state);

  return (
    <div className="app">
      <Table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Forks Count</th>
          </tr>
        </thead>
        <tbody>{repos}</tbody>
      </Table>
    </div>
  );
}
