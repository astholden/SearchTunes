const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require(path.resolve(__dirname, './routes/api.js'))

app.use(express.json());


app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, err) => {
    if (err){
        console.log("there is an error")
    }
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/api', apiRouter)




app.listen(3000);