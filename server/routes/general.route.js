module.exports = app => {
    app.get('/api/project/GetProject', (req, res) =>{
        var data = require('../json/projects.json');
        res.json(data);
    })
}