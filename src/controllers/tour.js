const Tour = require('../models/tour');

const DEFAULT_OFFSET = 0;
const DEFAULT_PAGE_SIZE = 10;

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }
    params.offset = (params.offset) ? params.offset : DEFAULT_OFFSET;
    params.pageSize = (params.pageSize) ? params.pageSize : DEFAULT_PAGE_SIZE;
    if (isNaN(params.offset)) {
        throw new Error('Invalid offset');
    }
    if (isNaN(params.pageSize)) {
        throw new Error('Invalid pageSize');
    }
    params.offset = Number(params.offset);
    params.pageSize = Number(params.pageSize);
    return await Tour.getMatchesByTourName(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}