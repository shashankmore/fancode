const mysql = require('../lib/mysql');

const createMatchNews = async reqBody => {
    const news = reqBody;
    const statement = 'insert into news (title, description, matchId) values (?,?,?);'
    const parameters = [ news.title, news.description, news.matchId];
    return await mysql.query(statement, parameters);
}

const createTourNews = async reqBody => {
    const news = reqBody;
    const statement = 'insert into news (title, description, tourId) values (?,?,?);'
    const parameters = [ news.title, news.description, news.tourId ];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async params => {
    const statement = 'select n.id, n.title, n.description from news n where n.matchId = ?;';
    const parameters = [ params.matchId ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createMatchNews: createMatchNews,
    createTourNews: createTourNews,
    getNewsByMatchId: getNewsByMatchId
}