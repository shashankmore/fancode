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

const getNewsByMatchId = async params => {
    return await News.getNewsByMatchId(params);
}

const getNewsByTourId = async params => {
    const news = await News.getNewsByTourId(params);
    const res = [];
    news.forEach(n => {
        if (n.matchId == null) {
            delete n.matchId;
        }
        res.push(n);
    });
    return res;
}

const getNewsBySportId = async params => {
    const news = await News.getNewsBySportId(params);
    const res = [];
    news.forEach(n => {
        if (n.matchId == null) {
            delete n.matchId;
        }
        res.push(n);
    });
    return res;
}

module.exports = {
    createMatchNews: createMatchNews,
    createTourNews: createTourNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}