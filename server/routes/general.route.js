const { restart } = require('nodemon');

module.exports = app => {
    app.get('/api/project/GetProject', (req, res) =>{
        var data = require('../json/projects.json');
        res.json(data);
    })

    app.get('/api/apartment/GetAparments', (req, res) =>{
        var data = require('../json/apartment.json');
        res.json(data);
    })
}