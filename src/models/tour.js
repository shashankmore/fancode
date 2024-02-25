const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select m.id, t.id as tourId, m.name, m.status, m.format, m.startTime, m.endTime ' +
                      'from matches m left join tours t on m.tourId = t.id where t.name = ? and m.id > ? limit ?;';
    const parameters = [ params.name, params.offset, params.pageSize ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}
