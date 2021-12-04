import { Router, Request, Response } from 'express';
const axios = require('axios');
const fileData = require('../../data/repos.json');

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const getRepos = async () => {
    const request = await axios.get('https://api.github.com/users/silverorange/repos');
    const data = [...request.data, ...fileData];

    const filteredData = data.filter(repo => repo.fork === false);
    res.setHeader('content-type', 'application/json');
    res.json(filteredData);
  }  

  getRepos();
});
