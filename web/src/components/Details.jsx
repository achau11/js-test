import './details.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Details({ name }) {
  const [content, setContent] = useState('Loading');
  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${name}/master/README.md`)
      .then((res) => setContent(res.data))
      .catch((err) => setContent('Not Available'));
  });

  return (
    <div className="details">
      <h1>Details</h1>
      <button>Back</button>
      <ul>
        <li>Name</li>
        <li>Author</li>
        <li>Created date</li>
        <p>
          <b>Readme: </b>
          <br />
          {content}
        </p>
      </ul>
    </div>
  );
}

export default Details;
