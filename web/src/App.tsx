import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Repo from './components/Repo';

export function App() {
  const [repos, setRepos] = useState([]);
  //API call
  useEffect(() => {
    axios.get('http://localhost:4000/repos').then((res) => setRepos(res.data));
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <Repo />
      {console.log(repos)}
    </div>
  );
}
