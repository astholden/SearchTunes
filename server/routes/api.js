const express = require('express');
const path = require('path');
const getMusic = require(path.resolve(__dirname, '../controller/getMusic'));

const router = express.Router();

router.use(getMusic.searchArtist)

router.post('/', (req, res) => {
    return res.status(200).json(res.body)
})


module.exports = router;