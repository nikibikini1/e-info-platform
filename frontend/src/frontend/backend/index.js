const express = require('express');
const app = express();
const port = 5000;

app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, name: 'Проект А', progress: 75 },
    { id: 2, name: 'Проект Б', progress: 50 },
  ];
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
