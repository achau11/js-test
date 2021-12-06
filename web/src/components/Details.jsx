import './details.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Details({ name, backClick }) {
  const [content, setContent] = useState('Loading');
  const [latestCommit, setLatestCommit] = useState(null);

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${name}/master/README.md`)
      .then((res) => setContent(res.data))
      .catch((err) => setContent('Not Found'));
  }, [name]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${name}/commits`)
      .then((res) => {
        const sortedCommits = res.data.sort((a, b) => {
          return (
            new Date(b.commit.author.date) - new Date(a.commit.author.date)
          );
        });
        setLatestCommit(sortedCommits[0]);
      })
      .catch((err) => console.log(err));
  }, [name]);

  console.log(latestCommit);

  return (
    <div className="details">
      <h1>Details</h1>
      <button onClick={backClick}>Back</button>
      {latestCommit && (
        <ul>
          <li>
            <b>Message: </b>
            {latestCommit.commit.message}
          </li>
          <li>
            <b>Author: </b>
            {latestCommit.commit.author.name}
          </li>
          <li>
            <b>Commit date: </b>
            {latestCommit.commit.author.date}
          </li>
        </ul>
      )}
      <p>
        <b>Readme: </b>
        <br />
        {content}
      </p>
    </div>
  );
}

export default Details;
