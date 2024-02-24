const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/match').post(async (req, res, next) => {
        try {
            let reqBody = req.body;
            let result = await News.createMatchNews(reqBody);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').post(async (req, res, next) => {
        try {
            let reqBody = req.body;
            let result = await News.createTourNews(reqBody);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:matchId').get(async (req, res, next) => {
        try {
            let params = req.params;
            let result = await News.getNewsByMatchId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}