import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Repo from './components/Repo';

export function App() {
  const [repos, setRepos] = useState([]);
  //API call
  useEffect(() => {
    axios.get('http://localhost:4000/repos').then((res) => setRepos(res.data));
  }, []);

  return (
    <div className="App">
      <Repo />
      {console.log(repos)}
    </div>
  );
}
