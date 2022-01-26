const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, err) => {
    if (err){
        console.log("there is an error")
    }
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});




app.listen(3000);