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

    if (_.isPlainObject(simpleObj)) {
        // why? because FUCK YOU! that's why!
        return JSON.parse(JSON.stringify(simpleObj));
    }
};

util.listFiles = function (dir, options) {

    var results = [];
    options = options || {};
    _.forEach(fs.readdirSync(dir), function (file) {

        if (options.extension && !file.match(new RegExp(options.extension))) {
            return;
        }
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

util.arrayMatch = function (array, string) {
    var i = 0;
    for (i; i < array.length; i++) {
        if (string.match(new RegExp(array[i]))) {
            return array[i];
        }
    }
};


module.exports = util;
