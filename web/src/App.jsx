import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Repo from './components/Repo';
import { Table } from 'react-bootstrap';

export function App() {
  const [state, setState] = useState([]);
  const [language, setLanguage] = useState('');
  //API call
  useEffect(() => {
    axios.get('http://localhost:4000/repos').then((res) => setState(res.data));
  }, []);
  //Handler functions
  const handleLanguageChange = (e) => {
    const lang = e.target.textContent.toUpperCase();
    if (language) {
      // If the language button is clicked again it will reset to display unfiltered values.
      setLanguage('');
    } else {
      setLanguage(lang);
    }
  };

  const handleRepoClick = (id) => {
    console.log(id);
  };

  //Filter arrays to display them on what language type was clicked
  const filtered = !language
    ? state
    : state.filter((repo) => repo.language.toUpperCase() === language);

  const repos = filtered
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    })
    .map((repo) => {
      return (
        <Repo
          key={repo.id}
          index={state.indexOf(repo)}
          lang={repo.language}
          name={repo.name}
          desc={repo.description}
          forks_count={repo.forks_count}
          buttonClick={handleLanguageChange}
          repoClick={handleRepoClick}
        />
      );
    });

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
