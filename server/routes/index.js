var express = require('express');
var router = express.Router();
var index = require('../../server/controllers/index');

//首页
router.route('/install').all(index.install);
router.use(index.checkInstall);
router.get('/', index.index);
router.get('/me', index.me);


module.exports = function(app) {
    //app.use('/', router);
    var config = app.get('config');
    var path = (config.admin.dir ? '/' + config.admin.dir : '') + '/';
    app.use(path, router);
};
