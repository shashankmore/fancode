const News = require('../models/news');

const createMatchNews = async reqBody => {
    if (!reqBody.matchId) {
        throw new Error('matchId is missing');
    }
    return await News.createMatchNews(reqBody);
}

const createTourNews = async reqBody => {
    if (!reqBody.tourId) {
        throw new Error('tourId is missing');
    }
    return await News.createTourNews(reqBody);
}

module.exports = {
    createMatchNews: createMatchNews,
    createTourNews: createTourNews
}