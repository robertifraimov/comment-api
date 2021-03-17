const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const User = mongoose.model('User', {
    email: String,
    message: String,
});

app.put('/user', (req, res) => {
    const user = new User(req.body)
    user.save()
        .then((newUser) => {
            
            console.log(newUser)
            res.json(newUser) 
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500)
        });
})

mongoose.connect('mongodb://localhost/comment', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(port, () => console.log('Listening on http://localhost:' + port));
});