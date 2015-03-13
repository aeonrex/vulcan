/**
 * Created by taylorks on 3/7/15.
 */
'use strict';

var nconf = require('nconf'),
    util = require('./util'),
    appConfigPath = util.url.resolve(process.cwd()+'/', 'config');

module.exports = function () {
    nconf
        .env()
        .argv();

    util._.forEach(util.listFiles(appConfigPath, {extension: '.json'}), function (uri) {
        nconf.file(uri, uri);
    });
}();
