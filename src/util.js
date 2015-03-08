/**
 * Created by taylorks on 3/7/15.
 */

'use strict';

var util = require('util'),
    _ = require('lodash'),
    url = require('url'),
    fs = require('fs');


util._ = _;
util.url = url;


util.copy = function (simpleObj) {
    // why? because FUCK YOU! that's why!
    return JSON.parse(JSON.stringify(simpleObj));
};

util.listFiles = function (dir) {

    var results = [];

    _.forEach(fs.readdirSync(dir), function (file) {

        file = url.resolve(dir + '/', file);

        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(util.listFiles(file))
        } else {
            results.push(file);
        }

    });

    return results;

};

module.exports = util;
