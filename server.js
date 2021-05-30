const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const makeRandomUser = () => {
    const names = ['Peter', 'Marina', 'Robert', 'Bazil'];
    const ages = [12, 13, 15, 21];
    const jobs = ['coder', 'cook', 'teacher', 'singer'];
    const randIdx = Math.floor(Math.random() * 4);

    return {
        name: names[randIdx],
        age: ages[randIdx],
        job: jobs[randIdx]
    }
};

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
    res.send(makeRandomUser())
});

app.listen(port);
