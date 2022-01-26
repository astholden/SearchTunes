const path = require('path');
const getMusic = {}
const fetch = require('node-fetch')

getMusic.searchArtist = (req, res, next) => {
    let keyword = req.body.keyword
    keyword = keyword.toLowerCase().split(' ').join('+')
    const url = `https://itunes.apple.com/search?term=${keyword}&media=music&limit=15`
    console.log(url)
    fetch(url)
    .then((data) => data.json())
    .then((data) => {
        res.body = data.results
        console.log(res.body)
        return next ()
    })
}

module.exports = getMusic;